import timesheetService from "../service/timesheets.service.js";

class TimesheetsController {
  async getTimesheets(req, res) {
    try {
      const timesheets = await timesheetService.getTimesheets();
      res.status(200).json(timesheets)
    } catch (e) {
      console.log(e)
    }
  }

  async createTimesheet(req, res) {
    try {
      const timesheet = await timesheetService.createTimesheet(req.body);
      res.status(200).json(timesheet)
    } catch (e) {
      console.log(e)
    }
  }

  async getTimesheetById(req, res) {
    try {
      const timesheet = await timesheetService.getTimesheetById(req.params.id);
      res.status(200).json(timesheet)
    } catch (e) {
      console.log(e)
    }
  }

  async updateTimesheet(req, res) {
    try {
      const timesheet = await timesheetService.updateTimesheet(req.body);
      res.status(200).json(timesheet)
    } catch (e) {
      console.log(e)
    }
  }

  async deleteTimesheet(req, res) {
    try {
      const timesheet = await timesheetService.deleteTimesheet(req.params.id);
      res.status(200).json(timesheet)
    } catch (e) {
      console.log(e)
    }
  }
}
const timesheetsController =  new TimesheetsController();
export default timesheetsController;