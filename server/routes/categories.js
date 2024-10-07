const express = require('express')
const { Category, Product } = require('../models')
const { findById, getAll } = require('./helpers')

const router = express.Router()

router.get('/', (req, res, next) => {
  getAll(res, Category)
})

router.get('/:id', (req, res, next) => {
  findById(req, res, Category, [Product])
})

module.exports = router
