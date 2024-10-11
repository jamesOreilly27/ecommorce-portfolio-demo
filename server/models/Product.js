const db = require('../db')
const Sequelize = require('sequelize')

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.DECIMAL(10, 2),
    allowNull: false
  },
  image: {
    type: Sequelize.STRING   

  },
  stock_quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 0
  },
  is_active: {
    type: Sequelize.BOOLEAN,
    defaultValue: true
  },
  featured: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Product
