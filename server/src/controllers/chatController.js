// server/src/controllers/chatController.js
import { answerQuestion } from "../services/chatService.js";

export async function ask(req, res, next) {
  try {
    const { question, sessionId } = req.body;

    if (!question) {
      return res.status(400).json({ error: "❌ Question is required" });
    }

    const answer = await answerQuestion({ question, sessionId: sessionId || "default" });
    res.json({ success: true, answer });
  } catch (err) {
    console.error("❌ Chatbot error:", err.message);
    next(err);
  }
}
