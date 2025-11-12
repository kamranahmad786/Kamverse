import * as projectService from "../services/projectService.js";
import logger from "../utils/logger.js";

// GET /api/portfolio
export const getAllProjects = async (req, res, next) => {
  try {
    const projects = await projectService.getProjects();
    res.json({ projects });
  } catch (err) {
    logger.error("❌ Failed to fetch projects", err);
    next(err);
  }
};

// POST /api/portfolio
export const createProject = async (req, res, next) => {
  try {
    const { title, description, techStack, image, github, link } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const project = await projectService.addProject({
      title,
      description,
      techStack,
      image,
      github,
      link,
    });

    logger.info(`📌 Project added: ${title}`);
    res.status(201).json(project);
  } catch (err) {
    logger.error("❌ Failed to add project", err);
    next(err);
  }
};
