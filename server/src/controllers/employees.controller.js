import employeesService from "../service/employees.service.js";

class EmployeesController {
  async getAllUsers(req, res) {
    try {
      const users = await employeesService.getAllUsers();
      res.status(200).json(users)
    } catch (e) {
      console.log(e)
    }
  }

  async createUser(req, res) {
    try {
      const user = await employeesService.createUser(req.body);
      res.status(200).json(user)
    } catch (e) {
      console.log(e)
    }
  }

  async getUserById(req, res) {
    try {
      const user = await employeesService.getUserById(req.params.id);
      res.status(200).json(user)
    } catch (e) {
      console.log(e)
    }
  }

  async updateUser(req, res) {
    try {
      const user = await employeesService.updateUser(req.body);
      res.status(200).json(user)
    } catch (e) {
      console.log(e)
      res.status(400).send({message: e.message})
    }
  }

  async deleteUser(req, res) {
    try {
      const user = await employeesService.deleteUser(req.params.id);
      res.status(200).json(user)
    } catch (e) {
      console.log(e)
    }
  }
}
const employeesController =  new EmployeesController();
export default employeesController;