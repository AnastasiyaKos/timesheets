import {Router} from "express";
import projectsController from "../controllers/projects.controller.js";

const projectsRouter = Router()

projectsRouter.get('/', projectsController.getAllProject);
projectsRouter.post('/', projectsController.createProject);
projectsRouter.get('/:id', projectsController.getProjectById);
projectsRouter.put('/:id', projectsController.updateProject);
projectsRouter.delete('/:id', projectsController.deleteProject);

export default projectsRouter;