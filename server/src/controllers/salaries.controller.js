import salariesService from "../service/salaries.service.js";


class SalariesController {

  async getAllSalaries(req, res) {
    try {
      const salaries = await salariesService.getAllSalaries();
      res.status(200).json(salaries)
    } catch (e) {
      console.log(e)
    }
  }

  async createSalary(req, res) {
    try {
      const user = await salariesService.createSalary(req.body);
      res.status(200).json(user)
    } catch (e) {
      console.log(e)
    }
  }

  async getSalaryById(req, res) {
    try {
      const salary = await salariesService.getSalaryById(req.params.id);
      res.status(200).json(salary)
    } catch (e) {
      console.log(e)
    }
  }

  async updateSalary(req, res) {
    try {
      const user = await salariesService.updateSalary(req.body);
      res.status(200).json(user)
    } catch (e) {
      console.log(e)
      res.status(400).send({message: e.message})
    }
  }

  async deleteSalary(req, res) {
    try {
      const user = await salariesService.deleteSalary(req.params.id);
      res.status(200).json(user)
    } catch (e) {
      console.log(e)
    }
  }
}
const salariesController =  new SalariesController();
export default salariesController;