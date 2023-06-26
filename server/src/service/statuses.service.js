import StatusModel from "../models/statuses.model.js";


class StatusesService {

  constructor() {}

  async getAllStatuses() {
    return await StatusModel.findAll();
  }

  async getStatusById(statusId) {
    return await StatusModel.findByPk(statusId);
  }
}

let statusService = new StatusesService();
export default statusService;
