const db = require('../db')
const Sequelize = require('sequelize')

const Category = db.define('category', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  featured: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})

module.exports = Category
