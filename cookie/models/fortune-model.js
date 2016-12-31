const Sequelize = require('sequelize');
const sequelizeConnection = require('../db');

// creating Fortune model
var Fortune = sequelizeConnection.define('fortune', {
  prediction: {
    type: Sequelize.STRING
  }
});

module.exports = Fortune;
