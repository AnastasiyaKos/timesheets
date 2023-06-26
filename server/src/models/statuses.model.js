import sequelize from "../config/db.config.js";
import {DataTypes} from "sequelize";

const StatusModel = sequelize.define('statuses', {
  id: {
    type: DataTypes.UUID,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(32),
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false,
  }
});

export default StatusModel;