const { DataTypes } = require('sequelize');
const sequelize = require('./database');

const Bots = sequelize.define('bot', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  language: {
    type: DataTypes.STRING, 
    allowNull: false,
    defaultValue: '[]', 
  },
});

module.exports = Bots;
