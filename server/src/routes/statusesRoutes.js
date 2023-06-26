import {Router} from "express";
import statusesController from "../controllers/statuses.controller.js";


const statusesRouter = Router();

statusesRouter.get('/', statusesController.getAllStatuses);
statusesRouter.get('/:id', statusesController.getStatusById);

export default statusesRouter;
