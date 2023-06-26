import sequelize from "../config/db.config.js";
import {DataTypes} from "sequelize";

const SalaryModel = sequelize.define('salaries', {
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
  date_from: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  date_to: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
  }
});

export default SalaryModel;