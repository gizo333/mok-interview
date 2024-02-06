

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('postgres', 'postgres', '923', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
