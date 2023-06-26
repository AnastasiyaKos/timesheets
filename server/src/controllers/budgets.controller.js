import budgetsService from "../service/budgets.service.js";

class BudgetsController {

  async getAllBudgets(req, res) {
    try {
      const budgets = await budgetsService.getAllBudgets();
      res.status(200).json(budgets)
    } catch (e) {
      console.log(e)
    }
  };

  async createBudget(req, res) {
    try {
      const user = await budgetsService.createBudget(req.body);
      res.status(200).json(user)
    } catch (e) {
      console.log(e)
    }
  };

  async getBudgetById(req, res) {
    try {
      const budget = await budgetsService.getBudgetById(req.params.id);
      res.status(200).json(budget)
    } catch (e) {
      console.log(e)
    }
  };

  async updateBudget(req, res) {
    try {
      const user = await budgetsService.updateBudget(req.body);
      res.status(200).json(user)
    } catch (e) {
      console.log(e)
      res.status(400).send({message: e.message})
    }
  }

  async deleteBudget(req, res) {
    try {
      const user = await budgetsService.deleteBudget(req.params.id);
      res.status(200).json(user)
    } catch (e) {
      console.log(e)
    }
  }
}
const budgetsController =  new BudgetsController();
export default budgetsController;