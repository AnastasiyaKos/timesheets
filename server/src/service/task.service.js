import TasksModel from "../models/tasks.model.js";
import EmployeeModel from "../models/employees.model.js";

class TaskService {

  constructor() {}

  async getAllTasks() {
    return await TasksModel.findAll();
  }

  async createTask(task) {
    return await TasksModel.create(task);
  }

  async getTaskById(taskId) {
    return await TasksModel.findByPk(taskId);
  }

  async updateTask(task) {
    let response = await TasksModel.update({...task}, {where: {id: task.id}});
    let updatedTask;
    if (!!response[0]){
      updatedTask = await TasksModel.findByPk(task.id);
    } else {
      throw Error('error');
    }

    return updatedTask;
  }

  async deleteTask(taskId) {
    return await TasksModel.destroy({where: {id: taskId}});
  }
}

let taskService = new TaskService();
export default taskService;