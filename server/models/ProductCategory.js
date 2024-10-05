const db = require('../db')
const Sequelize = require('sequelize')

const ProductCategory = db.define('product-category', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
})

module.exports = ProductCategory
