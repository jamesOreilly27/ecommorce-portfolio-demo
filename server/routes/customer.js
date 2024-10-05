const express = require('express')
router = express.Router()
const chalk = require('chalk')
const { findById, upsert } = require('./helpers')
const { Customer, Cart, Order } = require('../models')

router.get('/:id', (req, res, next) => {
  findById(req, res, Customer, [Cart, Order])
})

router.put('/:id',(req, res, next) => {
  upsert(req, res, Customer)
})

module.exports = router
