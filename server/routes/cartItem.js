const express = require('express')
const { CartItem, Product, Cart } = require('../models')
const { findById, getAll, getAllWhere, destroy } = require('./helpers')

const router = express.Router()

router.get('/:cartId', (req, res, next) => {
  CartItem.findAll({
    where: { cartId: req.params.cartId },
    include: { model: Product }
  })
  .then(cartItem => res.json(cartItem))
  .catch(next)
})

router.post('/', (req, res, next) => {
  CartItem.create(req.body)
  .then(newItem => {
    console.log('newItem: ', newItem)
    return res.json(newItem)
  })
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

router.delete('/cart/:cartId', (req, res, next) => {
  CartItem.findAll({
    where: { cartId: req.params.id },
  })
  .then(items => {
    items.forEach(item => {
      CartItem.delete(item.id)
    })
  })
})

module.exports = router
