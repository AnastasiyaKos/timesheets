import sequelize from "../config/db.config.js";
import {DataTypes} from "sequelize";

const ProjectModel = sequelize.define('projects', {
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
  deadline: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  overhead: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  status_id: {
    type: DataTypes.UUID,
  },
  timestamp: {
    type: DataTypes.DATE,
    allowNull: false,
  }
});

export default ProjectModel;