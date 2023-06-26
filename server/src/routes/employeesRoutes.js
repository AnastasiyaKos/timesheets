import {Router} from "express";
import employeesController from "../controllers/employees.controller.js";

const employeesRouter = Router();

employeesRouter.get('/', employeesController.getAllUsers);
employeesRouter.post('/', employeesController.createUser);
employeesRouter.get('/:id', employeesController.getUserById);
employeesRouter.put('/:id', employeesController.updateUser);
employeesRouter.delete('/:id', employeesController.deleteUser);

export default employeesRouter;