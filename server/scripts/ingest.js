/**
 * Ingest script:
 * Usage: node scripts/ingest.js ./data/resume.pdf
 * Splits documents, generates embeddings, and upserts into Pinecone index namespace.
 *
 * NOTE: Ensure PINECONE_INDEX exists (create via Pinecone console).
 */

import 'dotenv/config';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
import path from 'path';
import fs from 'fs';
// pdf-parse is CommonJS; require it via dynamic import interoperability
const pdf = require('pdf-parse');
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';
import { OpenAIEmbeddings } from '@langchain/openai';
import { HuggingFaceInferenceEmbeddings } from '@langchain/community/embeddings/hf';
import pineconePkg from '@pinecone-database/pinecone';
import { Document } from 'langchain/document';

async function main() {
  const filePath = process.argv[2];
  if (!filePath) {
    console.error('Usage: node scripts/ingest.js ./data/resume.pdf');
    process.exit(1);
  }
  if (!fs.existsSync(filePath)) {
    console.error('File not found:', filePath);
    process.exit(1);
  }

  console.log('Loading document:', filePath);
  // Simple PDF parser -> langchain Document(s)
  const dataBuffer = fs.readFileSync(filePath);
  // pdf-parse has different export shapes; use PDFParse if available
  let pdfData;
  if (pdf && typeof pdf.PDFParse === 'function') {
    // PDFParse expects options with a data buffer; use getText() to extract
    const parser = new pdf.PDFParse({ data: dataBuffer });
    const textResult = await parser.getText();
    pdfData = { text: textResult.text };
  } else if (typeof pdf === 'function') {
    pdfData = await pdf(dataBuffer);
  } else {
    console.error('pdf-parse import shape unsupported:', typeof pdf, Object.keys(pdf || {}));
    process.exit(1);
  }
  // Put whole text into one Document; splitter will break it up
  const docs = [new Document({ pageContent: pdfData.text, metadata: { source: path.basename(filePath) } })];

  const splitter = new RecursiveCharacterTextSplitter({ chunkSize: 1000, chunkOverlap: 200 });
  const chunks = await splitter.splitDocuments(docs);

  // Choose embeddings provider: prefer Hugging Face if HF_API_KEY is set, otherwise OpenAI
  let embeddings;
  if (process.env.HF_API_KEY) {
    console.log('Using HuggingFace embeddings (HF_API_KEY detected)');
    embeddings = new HuggingFaceInferenceEmbeddings({ apiKey: process.env.HF_API_KEY, model: 'sentence-transformers/all-MiniLM-L6-v2' });
  } else if (process.env.OPENAI_API_KEY) {
    console.log('Using OpenAI embeddings (OPENAI_API_KEY detected)');
    embeddings = new OpenAIEmbeddings({ apiKey: process.env.OPENAI_API_KEY, model: 'text-embedding-3-small' });
  } else {
    console.error('No embeddings API key found. Set HF_API_KEY or OPENAI_API_KEY in your environment.');
    process.exit(1);
  }

  // Initialize Pinecone client and index (handle different export shapes across versions)
  const apiKey = process.env.PINECONE_API_KEY;
  const environment = process.env.PINECONE_ENVIRONMENT;
  const indexName = process.env.PINECONE_INDEX;

  if (!apiKey || !indexName) {
    console.error('PINECONE_API_KEY and PINECONE_INDEX must be set in the environment');
    process.exit(1);
  }

  // Instantiate Pinecone client using the exported `Pinecone` class when available
  let pineconeClient;
  try {
    const PineconeClass = pineconePkg.Pinecone || pineconePkg.default?.Pinecone || pineconePkg;
    if (typeof PineconeClass === 'function') {
      // pass apiKey in constructor so the client can read config
      pineconeClient = new PineconeClass({ apiKey, controllerHostUrl: process.env.PINECONE_CONTROLLER_HOST });
    } else {
      pineconeClient = pineconePkg;
    }
  } catch (err) {
    console.error('Failed to create Pinecone client instance:', err);
    process.exit(1);
  }

  // Obtain index via client API if available
  let index;
  try {
    if (pineconeClient && typeof pineconeClient.index === 'function') {
      index = pineconeClient.index(indexName);
    } else if (pineconeClient && typeof pineconeClient.Index === 'function') {
      index = pineconeClient.Index(indexName);
    } else {
      index = null;
    }
  } catch (err) {
    // If describe/index resolution fails (network/controller issues), fall back to REST upsert later
    console.warn('Could not obtain Pinecone index via SDK, will use REST fallback. Error:', err.message || err);
    index = null;
  }

  // If we can describe the index, fetch its configured dimension so we can validate embeddings
  let indexDimension = null;
  try {
    if (pineconeClient && typeof pineconeClient.describeIndex === 'function') {
      const meta = await pineconeClient.describeIndex(indexName);
      indexDimension = meta?.dimension ?? null;
      if (indexDimension) console.log('Pinecone index dimension:', indexDimension);
    }
  } catch (err) {
    // ignore - we'll validate using upsert errors later if needed
    console.warn('Could not describe Pinecone index (continuing):', err.message || err);
  }

  // Rest API fallback helper
  const pineconeRestUpsert = async (vectors, namespace) => {
    const apiKey = process.env.PINECONE_API_KEY;
    const environment = process.env.PINECONE_ENVIRONMENT;
    const idx = process.env.PINECONE_INDEX;
    if (!apiKey || !environment || !idx) throw new Error('Missing Pinecone env for REST upsert');
    // Standard host pattern: {indexName}-{environment}.pinecone.io
    const host1 = `https://${idx}-${environment}.pinecone.io/vectors/upsert`;
    const host2 = `https://${idx}.pinecone.io/vectors/upsert`;
    const body = { vectors, namespace };
    const headers = { 'Api-Key': apiKey, 'Content-Type': 'application/json' };

    const tryUrl = async (url) => {
      const res = await fetch(url, { method: 'POST', headers, body: JSON.stringify(body) });
      if (!res.ok) {
        const txt = await res.text();
        const err = new Error(`Pinecone REST upsert failed: ${res.status} ${res.statusText} - ${txt}`);
        err.status = res.status;
        throw err;
      }
      return res.json();
    };

    try {
      return await tryUrl(host1);
    } catch (err) {
      return await tryUrl(host2);
    }
  };


  // Compute embeddings for each chunk and upsert to Pinecone
  console.log('Computing embeddings for', chunks.length, 'chunks...');
  const namespace = process.env.PINECONE_NAMESPACE || '';

  // Quick embedding dimension check using first chunk to avoid hard-to-debug upsert dimension errors
  if (chunks.length > 0) {
    const sampleText = chunks[0].pageContent || chunks[0].content || chunks[0].text || '';
    let sampleVec;
    try {
      const maybe = await (embeddings.embedQuery ? embeddings.embedQuery(sampleText) : embeddings.embed(sampleText));
      sampleVec = Array.isArray(maybe) ? maybe : await maybe;
    } catch (err) {
      console.error('Failed to compute sample embedding:', err.message || err);
      process.exit(1);
    }
    let embedDim = sampleVec.length;
    console.log('Sample embedding dimension:', embedDim);
    if (indexDimension && embedDim !== indexDimension) {
      console.error(`Embedding dimension (${embedDim}) does not match Pinecone index dimension (${indexDimension}).`);
      // If OPENAI_API_KEY is available and we are currently using HF embeddings, try OpenAI automatically
      if (process.env.OPENAI_API_KEY && embeddings && embeddings.constructor && embeddings.constructor.name && embeddings.constructor.name.toLowerCase().includes('hugging')) {
        console.log('HF embeddings dimension mismatch detected, but OPENAI_API_KEY is present — switching to OpenAI embeddings and retrying...');
        try {
          embeddings = new OpenAIEmbeddings({ apiKey: process.env.OPENAI_API_KEY, model: 'text-embedding-3-small' });
          const maybe2 = await (embeddings.embedQuery ? embeddings.embedQuery(sampleText) : embeddings.embed(sampleText));
          const sampleVec2 = Array.isArray(maybe2) ? maybe2 : await maybe2;
          embedDim = sampleVec2.length;
          console.log('New sample embedding dimension (OpenAI):', embedDim);
          if (embedDim !== indexDimension) {
            console.error(`OpenAI embedding dimension (${embedDim}) still does not match Pinecone index dimension (${indexDimension}).`);
            process.exit(1);
          }
        } catch (err) {
          console.error('Failed to compute OpenAI sample embedding after fallback:', err.message || err);
          process.exit(1);
        }
      } else {
        console.error('Options to resolve:');
        console.error('- Provide an OPENAI_API_KEY to use OpenAI embeddings that match a 1536-d index (if you intended that).');
        console.error('- Or recreate the Pinecone index with dimension matching your embeddings (e.g. 384 for sentence-transformers/all-MiniLM-L6-v2).');
        console.error('- Or pick a Hugging Face model whose embedding dimension matches your existing index.');
        process.exit(1);
      }
    }
  }

  // Batch upserts (Pinecone recommends batching)
  const batchSize = 32;
  for (let i = 0; i < chunks.length; i += batchSize) {
    const batch = chunks.slice(i, i + batchSize);
    const texts = batch.map((d) => d.pageContent || d.content || d.text || '');

    // embeddings.embedDocuments may vary by package; use embedQuery for single and fallback
    const vectors = await Promise.all(
      texts.map(async (t) => {
        const vec = await embeddings.embedQuery ? embeddings.embedQuery(t) : embeddings.embed(t);
        return Array.isArray(vec) ? vec : await vec;
      })
    );

    const pineconeUpsertItems = batch.map((doc, idx) => ({
      id: `${path.basename(filePath)}-${i + idx}`,
      values: vectors[idx],
      metadata: { source: path.basename(filePath), text: doc.pageContent ?? doc.content ?? doc.text ?? '' },
    }));

    // Try using the client index if available, otherwise use REST fallback
    if (index && typeof index.upsert === 'function') {
      try {
        if (namespace && namespace !== '') {
          // v6 SDK: use namespace() to scope
          const nsClient = typeof index.namespace === 'function' ? index.namespace(namespace) : index;
          await nsClient.upsert(pineconeUpsertItems);
        } else {
          await index.upsert(pineconeUpsertItems);
        }
      } catch (err) {
        console.warn('Index upsert failed; falling back to REST upsert. Error:', err.message || err);
        await pineconeRestUpsert(pineconeUpsertItems, namespace);
      }
    } else {
      await pineconeRestUpsert(pineconeUpsertItems, namespace);
    }
    console.log(`Upserted batch ${i / batchSize + 1} (${pineconeUpsertItems.length} vectors)`);
  }

  console.log('Ingest complete — chunks inserted:', chunks.length);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
