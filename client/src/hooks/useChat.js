import { useState } from "react";
import chatApi from "../services/chatApi";

/**
 * useChat Hook
 * Handles conversation state + API calls to backend RAG chatbot.
 */
export default function useChat() {
  const [messages, setMessages] = useState([]);   // [{ role: "user"|"bot", content: "..." }]
  const [loading, setLoading] = useState(false);

  // Send a message to the chatbot API
  const sendMessage = async (text) => {
    if (!text.trim()) return;

    // Add user message immediately
    const newUserMessage = { role: "user", content: text };
    setMessages((prev) => [...prev, newUserMessage]);

    setLoading(true);
    try {
      const res = await chatApi.ask(text);

      const botMessage = {
        role: "bot",
        content: res.reply || "No response from bot 🤖",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);
      setMessages((prev) => [
        ...prev,
        { role: "bot", content: "⚠️ Error: Could not connect to chatbot." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return {
    messages,
    loading,
    sendMessage,
  };
}
