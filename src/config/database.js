require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.MYSQLDATABASE,
  process.env.MYSQLUSER,
  process.env.MYSQLPASSWORD,
  {
    dialect: 'mysql',
    port: process.env.MYSQLPORT,
    logging: false, // Desativa logs de SQL no console
  }
);

module.exports = sequelize;
