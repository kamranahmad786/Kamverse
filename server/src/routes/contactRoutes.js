import express from "express";
import { body, validationResult } from "express-validator";
import { createContact } from "../services/contactService.js";

const router = express.Router();

router.post(
  "/",
  body("name").isString().notEmpty(),
  body("email").isEmail(),
  body("message").isString().notEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });
    try {
      const contact = await createContact(req.body);
      res.status(201).json(contact);
    } catch (err) {
      res.status(err.status || 500).json({ error: err.message || "Server error" });
    }
  }
);

export default router;
