const express = require('express')
const chalk = require('chalk')
const { Review } = require('../models')
const { findById, getAll } = require('./helpers')

const router = express.Router()

router.get('/', (req, res, next) => {
  getAll(res, Review)
})

module.exports = router
