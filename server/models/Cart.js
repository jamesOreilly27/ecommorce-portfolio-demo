const db = require('../db')
const Sequelize = require('sequelize')

const Cart = db.define('cart', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  status: {
    type: Sequelize.STRING,
    allowNull: false
  },
  total_amount: {
    type: Sequelize.DECIMAL(10, 2)
  }
})


module.exports = Cart
