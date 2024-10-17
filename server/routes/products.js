const express = require('express')
const chalk = require('chalk')
const { Product, Category, Review } = require('../models')
const { findById, getAll, getAllWhere } = require('./helpers')

const router = express.Router()

/***** All Products *****/
router.get('/', (req, res, next) => {
  getAll(res, Product, [Category, Review])
})

router.get('/featured', (req, res, next) => {
  getAllWhere(res, Product, { featured: true })
})


/***** Get by ID *****/
router.get('/:id', (req, res, next) => {
  findById(req, res, Product, [Review, Category])
})

router.get('/filtered', (req, res, next) => {
  const { categoryIds } = req.query
  Product.findAll({
    where: {
      [or]: [
        { categoryId: []}
      ]
    }
  })
})

module.exports = router
