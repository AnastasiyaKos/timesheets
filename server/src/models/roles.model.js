import sequelize from "../config/db.config.js";
import {DataTypes} from "sequelize";

const RoleModel = sequelize.define('roles', {
  id: {
    type: DataTypes.UUID,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(128),
    allowNull: false,
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false,
  }
});

export default RoleModel;