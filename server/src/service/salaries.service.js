import SalaryModel from "../models/salaries.model.js";


class SalariesService {

  constructor() {}

  async getAllSalaries() {
    return await SalaryModel.findAll();
  }

  async createSalary(body) {
    return await SalaryModel.create(body);
  }

  async getSalaryById(salaryId) {
    return await SalaryModel.findByPk(salaryId);
  }

  async updateSalary(salary) {
    let response = await SalaryModel.update({...salary}, {where: {id: salary.id}});
    let updatedSalary;
    if (!!response[0]){
      updatedSalary = await SalaryModel.findByPk(salary.id);
    } else {
      throw Error('error');
    }
    return updatedSalary;
  };

  async deleteSalary(salaryId) {
    return await SalaryModel.destroy({where: {id: salaryId}});
  };
}

let salaryService = new SalariesService();
export default salaryService;
