const express = require('express')
const chalk = require('chalk')
const { Product } = require('../models')
const { findById, getAll } = require('./helpers')

const router = express.Router()

/***** All Products *****/
router.get('/', (req, res, next) => {
  getAll(res, Product)
})

/***** Get by ID *****/
router.get('/:id', (req, res, next) => {
  findById(req, res, Product)
})

module.exports = router
