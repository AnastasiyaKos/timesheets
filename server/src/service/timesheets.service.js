import TimesheetModel from "../models/timesheets.model.js";

class TimesheetsService {
  constructor() {}

  async getTimesheets() {
    return await TimesheetModel.findAll();
  }

  async createTimesheet(timesheet) {
    return await TimesheetModel.create(timesheet);
  }

  async getTimesheetById(timesheetId) {
    return await TimesheetModel.findByPk(timesheetId);
  }

  async updateTimesheet(timesheet) {
    let response = await TimesheetModel.update({...timesheet}, {where: {id: timesheet.id}});
    let updatedTimesheet;
    if (!!response[0]){
      updatedTimesheet = await TimesheetModel.findByPk(timesheet.id);
    } else {
      throw Error('error');
    }
    return updatedTimesheet;
  }

  async deleteTimesheet(timesheetId) {
    return await TimesheetModel.destroy({where: {id: timesheetId}});
  }
}

let timesheetService = new TimesheetsService();
export default timesheetService;