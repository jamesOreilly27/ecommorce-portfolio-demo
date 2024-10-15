const express = require('express')
const router = express.Router()

router.use('/me', require('./customer'))
router.use('/products', require('./products'))
router.use('/categories', require('./categories'))
router.use('/orders', require('./orders'))
router.use('/reviews', require('./reviews'))
router.use('/cart-items', require('./cartItem'))


module.exports = router
