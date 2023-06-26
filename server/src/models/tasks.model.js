import sequelize from "../config/db.config.js";
import {DataTypes} from "sequelize";

const TaskModel = sequelize.define('tasks', {
  id: {
    type: DataTypes.UUID,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(64),
    allowNull: false,
  },
  duration: {
    type: DataTypes.DOUBLE,
  },
  deadline: {
    type: DataTypes.DATE,
  },
  status_id: {
    type: DataTypes.UUID,
  },
  user_id: {
    type: DataTypes.UUID,
  },
  project_id: {
    type: DataTypes.UUID,
  },
  crm_id: {
    type: DataTypes.STRING(16),
    allowNull: false,
  },
  comment: {
    type: DataTypes.STRING(256),
  },
  timestamp: {
    type: DataTypes.DATE,
  }
});

export default TaskModel;
