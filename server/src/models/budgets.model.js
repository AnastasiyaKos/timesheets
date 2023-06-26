import sequelize from "../config/db.config.js";
import {DataTypes} from "sequelize";

const BudgetModel = sequelize.define('budgets', {
  id: {
    type: DataTypes.UUID,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  value: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  status_id: {
    type: DataTypes.UUID,
  },
  project_id: {
    type: DataTypes.UUID,
  },
  timestamp: {
    type: DataTypes.DATE,
  }
});

export default BudgetModel;
