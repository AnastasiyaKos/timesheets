import projectsService from "../service/projects.service.js";


class ProjectsController {

  async getAllProject(req, res) {
    try {
      const projects = await projectsService.getAllProjects();
      res.status(200).json(projects)
    } catch (e) {
      console.log(e)
    }
  }

  async createProject(req, res) {
    try {
      const project = await projectsService.createProject(req.body);
      res.status(200).json(project)
    } catch (e) {
      console.log(e)
    }
  }

  async getProjectById(req, res) {
    try {
      const project = await projectsService.getProjectById(req.params.id);
      res.status(200).json(project)
    } catch (e) {
      console.log(e)
    }
  }

  async updateProject(req, res) {
    try {
      const project = await projectsService.updateProject(req.body);
      res.status(200).json(project)
    } catch (e) {
      console.log(e)
    }
  }

  async deleteProject(req, res) {
    try {
      const project = await projectsService.deleteProject(req.params.id);
      res.status(200).json(project)
    } catch (e) {
      console.log(e)
    }
  }
}
const projectsController =  new ProjectsController();
export default projectsController;