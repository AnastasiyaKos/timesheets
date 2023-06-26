import EmployeeModel from "../models/employees.model.js";
import bcrypt from 'bcrypt';

class EmployeesService {
  constructor() {};

  async getAllUsers() {
    return await EmployeeModel.findAll();
  };

  async createUser(user) {
    let body = {...user};
    let salt = bcrypt.genSaltSync();
    body.password = bcrypt.hashSync(body.password, salt);
    return await EmployeeModel.create(body);
  };

  async getUserById(userId) {
    return await EmployeeModel.findByPk(userId);
  };

  async updateUser(user) {
    let response = await EmployeeModel.update({...user}, {where: {id: user.id}});
    let updatedUser;
    if (!!response[0]){
      updatedUser = await EmployeeModel.findByPk(user.id);
    } else {
      throw Error('error');
    }
    return updatedUser;
  };

  async deleteUser(userId) {
    return await EmployeeModel.destroy({where: {id: userId}});
  };
}

let employeesService = new EmployeesService();
export default employeesService;