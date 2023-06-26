import sequelize from "../config/db.config.js";
import {DataTypes} from "sequelize";

const BillableModel = sequelize.define('billables', {
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
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING(32),
  },
  inner: {
    type: DataTypes.INTEGER
  },
  user_id: {
    type: DataTypes.UUID,
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
  }
});

export default BillableModel;
