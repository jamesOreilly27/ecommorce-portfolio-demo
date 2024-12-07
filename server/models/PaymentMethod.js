const db = require('../db')
const Sequelize = require('sequelize')

const PaymentMethod = db.define('payment-method', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  cardNumber: {
    type: Sequelize.STRING,
    allowNull: false
  },
  cardHolderName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  ExpDate: {
    type: Sequelize.DATEONLY,
    allowNull: false
  },
  ccv: {
    type: Sequelize.STRING,
    allowNull: false
  },
  billingAddress: {
    type: Sequelize.STRING,
    allowNull: false
  },
  billingTown: {
    type: Sequelize.STRING,
    allowNull: false
  },
  billingZipCode: {
    type: Sequelize.STRING,
    allowNull: false
  },
  billingState: {
    type: Sequelize.STRING,
    allowNull: false
  },
  current: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
})


module.exports = PaymentMethod
