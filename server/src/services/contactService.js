// backend/services/contactService.js
import nodemailer from "nodemailer";
import logger from "../utils/logger.js";
import Contact from "../models/Contact.js"; // create this Mongoose model (see snippet below)
import { validationResult } from "express-validator";

/**
 * contactService - operations for the contact form
 * - createContact(payload) : saves to DB and optionally sends an email
 */

const smtpConfigured = process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS;

let transporter = null;
if (smtpConfigured) {
  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || "587", 10),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

/**
 * createContact
 * @param {{name:string,email:string,message:string}} payload
 * @returns saved contact document
 */
export async function createContact(payload) {
  const { name, email, message } = payload || {};

  if (!name || !email || !message) {
    const err = new Error("Missing required fields (name, email, message)");
    err.status = 400;
    throw err;
  }

  try {
    const contact = new Contact({ name, email, message });
    await contact.save();

    // optional email notification
    if (transporter && process.env.CONTACT_NOTIFICATION_EMAIL) {
      try {
        await transporter.sendMail({
          from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
          to: process.env.CONTACT_NOTIFICATION_EMAIL,
          subject: `New contact from ${name} <${email}>`,
          text: `You have a new message:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
          html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br/>${message}</p>`
        });
      } catch (mailErr) {
        logger.error("Failed to send contact notification: " + (mailErr.stack || mailErr.message));
        // don't break; we still return success
      }
    }

    return contact;
  } catch (err) {
    logger.error("createContact error: " + (err.stack || err.message));
    throw err;
  }
}

/** utility: fetch recent contacts */
export async function listContacts(limit = 50) {
  return Contact.find().sort({ createdAt: -1 }).limit(limit).exec();
}
