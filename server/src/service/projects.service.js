import ProjectModel from "../models/projects.model.js";
import EmployeeModel from "../models/employees.model.js";

class ProjectsService {
  constructor() {};

  async getAllProjects() {
    return await ProjectModel.findAll();
  };

  async createProject(project) {
    return await ProjectModel.create(project);
  };

  async getProjectById(projectId) {
    return await ProjectModel.findByPk(projectId);
  };

  async updateProject(project) {
    let response = await ProjectModel.update({...project}, {where: {id: project.id}});
    let updatedProject;
    if (!!response[0]){
      updatedProject = await ProjectModel.findByPk(project.id);
    } else {
      throw Error('error');
    }
    return updatedProject;
  };

  async deleteProject(projectId) {
    return await ProjectModel.destroy({where: {id: projectId}});
  };
}

let projectService = new ProjectsService();
export default projectService;
