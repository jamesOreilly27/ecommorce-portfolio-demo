const db = require('../db')
const Sequelize = require('sequelize')

const Address = db.define('address', {
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  town: {
    type: Sequelize.STRING,
    allowNull: false
  },
  zip_code: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

module.exports = Address
