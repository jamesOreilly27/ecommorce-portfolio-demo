const db = require('../db')
const Sequelize = require('sequelize')

const Customer = db.define('customer', {
  first_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  last_name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  address: {
    type: Sequelize.STRING
  },
  town: {
    type: Sequelize.STRING
  },
  zip_code: {
    type: Sequelize.STRING
  }
})

module.exports = Customer
