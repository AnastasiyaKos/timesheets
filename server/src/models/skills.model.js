import sequelize from "../config/db.config.js";
import {DataTypes} from "sequelize";

const SkillModel = sequelize.define('skills', {
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
  status: {
    type: DataTypes.STRING(32),
    allowNull: false,
  },
  parent_id: {
    type: DataTypes.UUID,
  },
  timestamp: {
    type: DataTypes.DATE,
  }
});

export default SkillModel;