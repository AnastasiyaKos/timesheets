import {Router} from "express";
import timesheetsController from "../controllers/timesheets.controller.js";

const timesheetsRouter = Router();

timesheetsRouter.get('/', timesheetsController.getTimesheets);
timesheetsRouter.post('/', timesheetsController.createTimesheet);
timesheetsRouter.get('/:id', timesheetsController.getTimesheetById);
timesheetsRouter.put('/:id', timesheetsController.updateTimesheet);
timesheetsRouter.delete('/:id', timesheetsController.deleteTimesheet);

export default timesheetsRouter;