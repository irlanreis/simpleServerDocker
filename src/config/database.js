require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.MYSQLDATABASE,
  process.env.MYSQLUSER,
  process.env.MYSQLPASSWORD,
  {
    host: process.env.MYSQLHOST, // <- isso aqui é crucial no Railway
    dialect: 'mysql',
    port: process.env.MYSQLPORT,
    logging: false,
  }
);

module.exports = sequelize;
