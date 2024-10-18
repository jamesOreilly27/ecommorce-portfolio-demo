const express = require('express')
const { Op } = require('sequelize');
const chalk = require('chalk')
const { Product, Category, ProductCategory, Review } = require('../models')
const { findById, getAll, getAllWhere } = require('./helpers')

const router = express.Router()

/***** All Products *****/
router.get('/', (req, res, next) => {
  const { categoryIds, isCoffeeFilter } = req.query
  const parsedCategoryIds = categoryIds ? categoryIds.split(',').map(Number) : []

  if(isCoffeeFilter) {
    Product.findAll({
      include: { model: Category }
    })
    .then(products => {
      return products.filter(product => {
        return product.categories.every(category => parsedCategoryIds.includes(category.id))
      })
    })
    .then(response => res.json(response))
    .catch(err => res.json(err))
  } else {
      const association = { model: Category }
      if(categoryIds) {
        association['where'] = { id: { [Op.in]: parsedCategoryIds } }
      }

      Product.findAll({ include: association })
      .then(response => res.json(response))
      .catch(err => res.json(err))
  }
})


/***** Featured Products *****/
router.get('/featured', (req, res, next) => {
  getAllWhere(res, Product, { featured: true })
})

/***** Get by ID *****/
router.get('/:id', (req, res, next) => {
  findById(req, res, Product, [Review, Category])
})

module.exports = router
