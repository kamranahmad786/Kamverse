import Skill from '../models/Skill.js';

export async function getSkills(req, res, next) {
  try {
    const skills = await Skill.find();
    res.json({ skills });
  } catch (err) {
    next(err);
  }
}

export async function addSkill(req, res, next) {
  try {
    const s = new Skill(req.body);
    await s.save();
    res.status(201).json({ skill: s });
  } catch (err) {
    next(err);
  }
}
