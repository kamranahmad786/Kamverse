import { OpenAIEmbeddings, ChatOpenAI } from "@langchain/openai";
import { HuggingFaceInferenceEmbeddings } from "@langchain/community/embeddings/hf";
import { Pinecone } from "@pinecone-database/pinecone";  // ✅ correct import
import { PineconeStore } from "@langchain/pinecone";
import { ChatPromptTemplate } from "@langchain/core/prompts";
import { createStuffDocumentsChain } from "langchain/chains/combine_documents";
import { createRetrievalChain } from "langchain/chains/retrieval";

let chain = null;

async function initChain() {
  if (chain) return chain;

  try {
    // ✅ Embeddings: try Hugging Face first, fallback to OpenAI if it fails
    let embeddings;
    try {
      if (process.env.HF_API_KEY) {
        embeddings = new HuggingFaceInferenceEmbeddings({
          apiKey: process.env.HF_API_KEY,
          model: "sentence-transformers/all-MiniLM-L6-v2",
          maxRetries: 3,
          timeout: 20000 // 20 seconds timeout
        });
        // Test the connection
        await embeddings.embedQuery("test");
      }
    } catch (error) {
      console.warn("Hugging Face embeddings failed, falling back to OpenAI:", error.message);
    }

    // Fallback to OpenAI if HF failed or wasn't configured
    if (!embeddings && process.env.OPENAI_API_KEY) {
      embeddings = new OpenAIEmbeddings({ 
        apiKey: process.env.OPENAI_API_KEY,
        model: "text-embedding-3-small",
        maxRetries: 3,
        timeout: 20000
      });
    } else if (!embeddings) {
      if (process.env.SKIP_RAG === "true" || process.env.NODE_ENV === "development") {
        // allow dev fallback later to respond without embeddings
        embeddings = null;
      } else {
        throw new Error("No embedding API key found. Set HF_API_KEY or OPENAI_API_KEY in your environment (or enable SKIP_RAG for local testing).");
      }
    }

    // ✅ Pinecone (new SDK v6+)
    const pinecone = new Pinecone({
      apiKey: process.env.PINECONE_API_KEY,
    });

    const index = pinecone.index(process.env.PINECONE_INDEX);

    // ✅ Vector store
    const vectorStore = await PineconeStore.fromExistingIndex(embeddings, {
      pineconeIndex: index,
      namespace: process.env.PINECONE_NAMESPACE || "",
    });

    const retriever = vectorStore.asRetriever({ k: 5 });

    // ✅ LLM
    const llmApiKey = process.env.OPENROUTER_API_KEY || process.env.OPENAI_API_KEY || undefined;
    const llm = new ChatOpenAI({
      apiKey: llmApiKey,
      model: process.env.OPENAI_CHAT_MODEL || "gpt-4o-mini",
      temperature: 0.2,
      configuration: process.env.OPENROUTER_API_KEY ? { baseURL: "https://openrouter.ai/api/v1" } : undefined,
    });

    // The combine-documents chain requires the prompt to include a {context}
    // variable which will be filled with the retrieved documents. Keep {input}
    // for the user's question.
    const prompt = ChatPromptTemplate.fromMessages([
      ["system", "You are a helpful AI assistant who answers based on the portfolio data."],
      ["human", "Context:\n{context}\n\nQuestion:\n{input}"],
    ]);

    const combineDocsChain = await createStuffDocumentsChain({ llm, prompt });

    chain = await createRetrievalChain({
      retriever,
      combineDocsChain,
    });

    return chain;
  } catch (error) {
    console.error("Failed to initialize Pinecone client:", error);
    throw new Error("Failed to initialize Pinecone client: " + error.message);
  }
}

export async function answerQuestion({ question, sessionId = "default" }) {
  const running = await initChain();
  const response = await running.invoke({ input: question });
  return response?.answer ?? response?.output_text ?? JSON.stringify(response);
}
