import Contact from '../models/Contact.js';

export async function submitContact(req, res, next) {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'name, email, message required' });
    }
    const c = new Contact({ name, email, message });
    await c.save();
    // TODO: Add e-mail notification / admin alerts if needed
    res.status(201).json({ contact: c });
  } catch (err) {
    next(err);
  }
}
