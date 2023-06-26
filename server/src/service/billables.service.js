import BillableModel from "../models/billable.model.js";

class BillablesService {
  constructor() {};

  async getAllBillables() {
    return await BillableModel.findAll();
  };

  async createBillable(user) {
    return await BillableModel.create(user);
  };

  async getBillableById(billableId) {
    return await BillableModel.findByPk(billableId);
  };

  async updateBillable(billable) {
    let response = await BillableModel.update({...billable}, {where: {id: billable.id}});
    let updatedBillable;
    if (!!response[0]){
      updatedBillable = await BillableModel.findByPk(billable.id);
    } else {
      throw Error('error');
    }
    return updatedBillable;
  }

  async deleteBillable(billableId) {
    return await BillableModel.destroy({where: {id: billableId}});
  }
}

let billablesService = new BillablesService();
export default billablesService;