import mongoose from 'mongoose';
const MessageSchema = new mongoose.Schema({
  sessionId: String,
  role: { type: String, enum: ['user','bot','system'], default: 'user' },
  content: String,
  createdAt: { type: Date, default: Date.now }
});
export default mongoose.model('Message', MessageSchema);
