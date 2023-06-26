import {Router} from "express";
import billableController from "../controllers/billable.controller.js";

const billablesRouter = Router();

billablesRouter.get('/', billableController.getAllBillables);
billablesRouter.post('/', billableController.createBillable);
billablesRouter.get('/:id', billableController.getBillableById);
billablesRouter.put('/:id', billableController.updateBillable);
billablesRouter.delete('/:id', billableController.deleteBillable);

export default billablesRouter;
