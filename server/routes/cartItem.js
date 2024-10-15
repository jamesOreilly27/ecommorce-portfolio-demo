const express = require('express')
const { CartItem, Product } = require('../models')
const { findById, getAll, getAllWhere } = require('./helpers')

const router = express.Router()

router.get('/:cartId', (req, res, next) => {
  getAllWhere(res, CartItem, {cartId: req.params.cartId}, [Product])
})

router.put('/:id', (req, res, next) => {
  CartItem.update(req.body, {
    where: { id: req.params.id },
    returning: true
  })
  .then(update => res.json(update[1]))
  .catch(err => console.log(err))
})

module.exports = router
