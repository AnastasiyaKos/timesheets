import {Sequelize} from 'sequelize';

const hostName = process.env.HOST || 'localhost';
const userName = process.env.USER || 'infodba';
const password = process.env.PASSWORD || 'infodba';
const database = process.env.DB || 'timesheet';
const dialect = process.env.DIALECT || 'postgres';

const sequelize = new Sequelize(database, userName, password, {
  host: hostName,
  dialect: dialect,
  operatorsAliases: false,
  define: {timestamps: false},
  pool: {
    max: 10, min: 0, acquire: 20000, idle: 5000
  }
});

export default sequelize;