import Project from "../models/Project.js";

// Service: only handles DB logic, no req/res/next here
export async function getProjects() {
  try {
    return await Project.find().sort({ createdAt: -1 });
  } catch (err) {
    throw new Error("Error fetching projects: " + err.message);
  }
}

export async function addProject(data) {
  try {
    const project = new Project(data);
    await project.save();
    return project;
  } catch (err) {
    throw new Error("Error adding project: " + err.message);
  }
}
