import taskService from "../service/task.service.js";

class TaskController {

  async getAllTasks(req, res) {
    try {
      const tasks = await taskService.getAllTasks();
      res.status(200).json(tasks)
    } catch (e) {
      console.log(e)
    }
  }

  async createTask(req, res) {
    try {
      const task = await taskService.createTask(req.body);
      res.status(200).json(task)
    } catch (e) {
      console.log(e)
    }
  }

  async getTaskById(req, res) {
    try {
      const task = await taskService.getTaskById(req.params.id);
      res.status(200).json(task)
    } catch (e) {
      res.status(400).send({message: e.message})
    }
  }

  async updateTask(req, res) {
    try {
      const task = await taskService.updateTask(req.body);
      res.status(200).json(task)
    } catch (e) {
      console.log(e)
    }
  }

  async deleteTask(req, res) {
    try {
      const task = await taskService.deleteTask(req.params.id);
      res.status(200).json(task)
    } catch (e) {
      console.log(e)
    }
  }
}
const taskController =  new TaskController();
export default taskController;