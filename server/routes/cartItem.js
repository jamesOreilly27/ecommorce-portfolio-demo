const express = require('express')
const { CartItem, Product } = require('../models')
const { findById, getAll, getAllWhere, destroy } = require('./helpers')

const router = express.Router()

router.get('/:cartId', (req, res, next) => {
  getAllWhere(res, CartItem, {cartId: req.params.cartId}, [Product])
})

router.post('/', (req, res, next) => {
  CartItem.create(req.body)
  .then(newItem => res.json(newItem))
  .catch(next)
})

router.put('/:id', (req, res, next) => {
  CartItem.update(req.body, {
    where: { id: req.params.id },
    returning: true
  })
  .then(update => res.json(update[1]))
  .catch(err => console.log(err))
})

router.delete('/:id', (req, res, next) => {
  destroy(req, res, CartItem)
})

module.exports = router
