import mongoose from 'mongoose';
const SkillSchema = new mongoose.Schema({
  name: { type: String, required: true },
  level: { type: String, default: 'intermediate' } // beginner/intermediate/expert
});
export default mongoose.model('Skill', SkillSchema);
