import billablesService from "../service/billables.service.js";


class BillableController {

  async getAllBillables(req, res) {
    try {
      const billables = await billablesService.getAllBillables();
      res.status(200).json(billables)
    } catch (e) {
      console.log(e)
    }
  }

  async createBillable(req, res) {
    try {
      const billable = await billablesService.createBillable(req.body);
      res.status(200).json(billable)
    } catch (e) {
      console.log(e)
    }
  }


  async getBillableById(req, res) {
    try {
      const billable = await billablesService.getBillableById(req.params.id);
      res.status(200).json(billable)
    } catch (e) {
      console.log(e)
    }
  }

  async updateBillable(req, res) {
    try {
      const billable = await billablesService.updateBillable(req.body);
      res.status(200).json(billable)
    } catch (e) {
      console.log(e)
      res.status(400).send({message: e.message})
    }
  }

  async deleteBillable(req, res) {
    try {
      const billable = await billablesService.deleteBillable(req.params.id);
      res.status(200).json(billable)
    } catch (e) {
      console.log(e)
    }
  }
}
const billableController =  new BillableController();
export default billableController;