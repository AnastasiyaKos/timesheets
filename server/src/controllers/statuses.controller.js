import statusesService from "../service/statuses.service.js";


class StatusesController {

  async getAllStatuses(req, res) {
    try {
      const statuses = await statusesService.getAllStatuses();
      res.status(200).json(statuses)
    } catch (e) {
      console.log(e)
    }
  }

  async getStatusById(req, res) {
    try {
      const status = await statusesService.getStatusById(req.params.id);
      res.status(200).json(status)
    } catch (e) {
      console.log(e)
    }
  }
}
const statusesController =  new StatusesController();
export default statusesController;