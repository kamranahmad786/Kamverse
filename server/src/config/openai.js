// server/src/config/openai.js

export const OPENAI_API_KEY = process.env.OPENAI_API_KEY || null;
export const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || null;
export const HF_API_KEY = process.env.HF_API_KEY || null;

export const OPENAI_CHAT_MODEL =
  process.env.OPENAI_CHAT_MODEL || "gpt-4o-mini";
