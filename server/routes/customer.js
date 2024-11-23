const express = require('express')
const router = express.Router()
const chalk = require('chalk')
const { findById, upsert } = require('./helpers')
const { Customer, Cart, Order, Review, OrderItem, CartItem, Address } = require('../models')

router.get('/:id', (req, res, next) => {
  findById(req, res, Customer, [Cart, Order, Review, Address], {
    cart: CartItem,
    order: OrderItem
  })
})

router.put('/:id',(req, res, next) => {
  upsert(req, res, Customer)
})

module.exports = router
