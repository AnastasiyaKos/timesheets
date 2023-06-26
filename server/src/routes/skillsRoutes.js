import {Router} from "express";
import skillsController from "../controllers/skills.controller.js";

const skillsRouter = Router()

skillsRouter.get('/', skillsController.getAllSkills);
skillsRouter.post('/', skillsController.createSkill);
skillsRouter.get('/:id', skillsController.getSkillById);
skillsRouter.put('/:id', skillsController.updateSkill);
skillsRouter.delete('/:id', skillsController.deleteSkill);

export default skillsRouter;