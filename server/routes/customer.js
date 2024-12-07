const express = require('express')
const router = express.Router()
const chalk = require('chalk')
const { findById, upsert } = require('./helpers')
const { Customer, Cart, Order, Review, OrderItem, CartItem, Address, PaymentMethod} = require('../models')

router.put('/addresses/:userId/:addressId', (req, res, next) => {
  const { userId, addressId } = req.params

  Address.update({ current: false }, {
    where: { customerId: parseInt(userId) },
    returning: true
  })
  .then(() => {
    return Address.update({ current: true }, {
      where: { id: parseInt(addressId) },
      returning: true })
  })
  .then(address => res.json(address[0]))
})


router.get('/:id', (req, res, next) => {
  findById(req, res, Customer, [Cart, Order, Review, Address, PaymentMethod], {
    cart: CartItem,
    order: OrderItem
  })
})

router.put('/:id',(req, res, next) => {
  upsert(req, res, Customer)
})

module.exports = router
