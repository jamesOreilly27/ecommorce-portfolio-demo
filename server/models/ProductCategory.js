const db = require('../db')
const Sequelize = require('sequelize')

const ProductCategory = db.define('productCategory', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }
})

module.exports = ProductCategory
