import { PineconeClient } from '@pinecone-database/pinecone';

let pineconeClient = null;

export async function initPinecone() {
  if (pineconeClient) return pineconeClient;
  const apiKey = process.env.PINECONE_API_KEY;
  const environment = process.env.PINECONE_ENVIRONMENT;
  if (!apiKey || !environment) {
    throw new Error('PINECONE_API_KEY and PINECONE_ENVIRONMENT must be set');
  }
  pineconeClient = new PineconeClient();
  await pineconeClient.init({ apiKey, environment });
  return pineconeClient;
}

export function getPineconeIndex(indexName) {
  if (!pineconeClient) throw new Error('Pinecone not initialized; call initPinecone() first.');
  return pineconeClient.Index(indexName);
}
