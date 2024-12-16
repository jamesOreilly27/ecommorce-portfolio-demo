const express = require('express')
const { Order, OrderItem, CartItem } = require('../models')
const { findById } = require('./helpers')

const router = express.Router()

router.get('/:id', (req, res, next) => {
  findById(req, res, Order, [OrderItem])
})


router.post('/create-order', (req, res, next) => {
  console.log('FIRING CREATE ORDER ROUTE')
  const { order, cartItems } = req.body
  return Order.create(order)
  .then(newOrder => {
    return cartItems.map(item => {
      return OrderItem.create({
        orderId: newOrder.id,
        quantity: parseFloat(item.quantity),
        price: parseFloat(item.price),
        productId: parseInt(item.productId)
      })
    .then(() => {
      cartItems.forEach(item => {
        CartItem.destroy({ where: { id: item.id } })
      })
    })
    .catch(err => console.log(err))
  })})
})

module.exports = router
