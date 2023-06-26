import sequelize from "../config/db.config.js";
import {DataTypes} from "sequelize";

const EmployeeModel = sequelize.define('employees', {
  id: {
    type: DataTypes.UUID,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  first_name: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
  last_name: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
  login: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING(32),
  },
  department: {
    type: DataTypes.STRING(32),
  },
  tab_id: {
    type: DataTypes.STRING(32),
  },
  role_id: {
    type: DataTypes.UUID,
  },
  salary_id: {
    type: DataTypes.UUID,
  },
  timestamp: {
    type: DataTypes.DATE,
  }
});

export default EmployeeModel;
