require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    dialect: 'mysql',
    port: process.env.DB_PORT,
    logging: false, // Desativa logs de SQL no console
  }
);

module.exports = sequelize;
