const db = require('../db')
const Sequelize = require('sequelize')

const OrderItem = db.define('order-item', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  }
})

module.exports = OrderItem
