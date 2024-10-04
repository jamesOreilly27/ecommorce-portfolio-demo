const express = require('express')
router = express.Router()
const chalk = require('chalk')
const { findById } = require('./helpers')
const { Customer, Cart, Order } = require('../models')

router.use('/:id', (req, res, next) => {
  findById(req, res, Customer, [Cart, Order])
})

module.exports = router
