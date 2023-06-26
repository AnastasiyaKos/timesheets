import {Router} from "express";
import rolesController from "../controllers/roles.controller.js";

const rolesRouter = Router()

rolesRouter.get('/', rolesController.getAllRoles);
rolesRouter.get('/:id', rolesController.getRoleById);

export default rolesRouter;
