const ProjectModel = require('../models/ProjectModel');

class ProjectRepository {

  static list() {
    return ProjectModel.list();
  }

  static get(projectId) {
    return ProjectModel.get(projectId);
  }

  static getFromNgo(ngoId) {
    return ProjectModel.getFromNgo(ngoId);
  }

  static async create(data) {
    try {
      const [projectId] = await ProjectModel.create(data);

      return projectId;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProjectRepository;
