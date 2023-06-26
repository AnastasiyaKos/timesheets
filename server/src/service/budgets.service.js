import BudgetModel from "../models/budgets.model.js";

class BudgetsService {
  constructor() {}

  async getAllBudgets() {
    return await BudgetModel.findAll();
  }

  async createBudget(budget) {
    return await BudgetModel.create(budget);
  };

  async getBudgetById(budgetId) {
    return await BudgetModel.findByPk(budgetId);
  };

  async updateBudget(budget) {
    let response = await BudgetModel.update({...budget}, {where: {id: budget.id}});
    let updatedBudget;
    if (!!response[0]){
      updatedBudget = await BudgetModel.findByPk(budget.id);
    } else {
      throw Error('error');
    }
    return updatedBudget;
  };

  async deleteBudget(budgetId) {
    return await BudgetModel.destroy({where: {id: budgetId}});
  };

}

let budgetService = new BudgetsService();
export default budgetService;
