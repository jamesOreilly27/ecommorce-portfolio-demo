const express = require('express')
const stripe = require('stripe')(process.env.STRIPE_KEY)

const router = express.Router()

router.post('/create-intent', (req, res, next) => {
  const { amount, currency, description, metadata } = req.body

  stripe.paymentIntents.create({
    amount,
    currency,
    description,
    metadata
  })
  .then(paymentIntent => {
    res.json({ clientSecret: paymentIntent.client_secret })
  })
  .catch(err => {
    console.error('Error creating PaymentIntent:', err)
    res.status(500).json({ error: 'Payment Intent creation failed'})
  })
})

module.exports = router
