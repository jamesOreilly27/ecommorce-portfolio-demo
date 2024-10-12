const express = require('express')
const { Category, Product } = require('../models')
const { findById, getAll, getAllWhere } = require('./helpers')

const router = express.Router()

router.get('/', (req, res, next) => {
  getAll(res, Category)
})

router.get('/featured', (req, res, next) => {
  getAllWhere(res, Category, { featured: true }, [Product])
})

router.get('/:id', (req, res, next) => {
  findById(req, res, Category, [Product])
})

module.exports = router
