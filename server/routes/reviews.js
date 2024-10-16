const express = require('express')
const chalk = require('chalk')
const { Review } = require('../models')
const { findById, getAll, getAllWhere } = require('./helpers')

const router = express.Router()

router.get('/', (req, res, next) => {
  getAll(res, Review)
})

router.get('/five-star', (req, res, next) => {
  getAllWhere(res, Review, { rating: 5 })
})

module.exports = router
