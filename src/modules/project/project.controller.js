const projectService = require("./project.service");

async function create(req, res) {
  try {
    const project = await projectService.createProject(
      req.body,
      req.user.userId
    );

    return res.status(201).json({
      success: true,
      data: project,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
}

async function getAll(req, res) {
  try {
    const projects = await projectService.getProjects(req.user.userId);

    return res.json({
      success: true,
      data: projects,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

module.exports = {
  create,
  getAll,
};
