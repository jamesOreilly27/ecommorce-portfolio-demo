const db = require('../db')
const Sequelize = require('sequelize')

const Review = db.define('review', {
  rating: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5,
    },
  },
  comment: {
    type: Sequelize.TEXT
  }
})

module.exports = Review
