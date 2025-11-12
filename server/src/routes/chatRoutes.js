import express from "express";
import { body, validationResult } from "express-validator";
import { answerQuestion } from "../services/chatService.js";

const router = express.Router();

router.post(
  "/query",
  body("question").isString().notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { question } = req.body;

      // ✅ Correct call: pass as object
      const result = await answerQuestion({ question, sessionId: "web-client" });

      res.json({ answer: result });
    } catch (err) {
      console.error("Chat route error:", err);
      res.status(500).json({ error: err.message || "Internal error" });
    }
  }
);

export default router;
