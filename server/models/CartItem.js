const db = require('../db')
const Sequelize = require('sequelize')

const CartItem = db.define('cart-item', {
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 1
  },
  price: {
    type: Sequelize.DECIMAL(10, 2)
  }
})

module.exports = CartItem
