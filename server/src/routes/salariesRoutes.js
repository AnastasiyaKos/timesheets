import {Router} from "express";
import salariesController from "../controllers/salaries.controller.js";


const salariesRouter = Router();

salariesRouter.get('', salariesController.getAllSalaries);
salariesRouter.post('', salariesController.createSalary);
salariesRouter.get('/:id', salariesController.getSalaryById);
salariesRouter.put('/:id', salariesController.updateSalary);
salariesRouter.delete('/:id', salariesController.deleteSalary);

export default salariesRouter;
