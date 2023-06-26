import {Router} from "express";
import budgetsController from "../controllers/budgets.controller.js";

const budgetsRouter = Router()

budgetsRouter.get('/', budgetsController.getAllBudgets);
budgetsRouter.post('/', budgetsController.createBudget);
budgetsRouter.get('/:id', budgetsController.getBudgetById);
budgetsRouter.put('/:id', budgetsController.updateBudget);
budgetsRouter.delete('/:id', budgetsController.deleteBudget);

export default budgetsRouter;
