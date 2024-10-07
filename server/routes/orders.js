const express = require('express')
const { Order, OrderItem } = require('../models')
const { findById } = require('./helpers')

const router = express.Router()

router.get('/:id', (req, res, next) => {
  findById(req, res, Order, [OrderItem])
})

module.exports = router
