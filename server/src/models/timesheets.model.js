import sequelize from "../config/db.config.js";
import {DataTypes} from "sequelize";

const TimesheetModel = sequelize.define('timesheets', {
  id: {
    type: DataTypes.UUID,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
  },
  hours: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  comment: {
    type: DataTypes.STRING(128),
  },
  user_id: {
    type: DataTypes.UUID,
  },
  task_id: {
    type: DataTypes.UUID,
  },
  status: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
  },
});

export default TimesheetModel;