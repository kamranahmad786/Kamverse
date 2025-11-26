import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  techStack: [String],
  image: String,
  github: String,
  link: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Project', ProjectSchema);
