const db = require('../db')
const Sequelize =  require('sequelize')

const Order = db.define('order', {
  order_date: {
    type: Sequelize.DATE
  },
  total_amount: {
    type: Sequelize.DECIMAL(10, 2)
  },
  status: {
    type: Sequelize.STRING,
    defaultValue: 'pending'
  }
})

module.exports = Order
