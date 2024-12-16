import React, { useState } from 'react'
import styled from 'styled-components'
import { FlexContainer, FlexColContainer } from './styled-components/layout'
import { PaymentElement, Elements, useStripe, useElements } from '@stripe/react-stripe-js'
//import {  } from '../Components

const Wrapper = styled(FlexContainer)`

`

const PaymentInfo = ({ user, refetchUser }) => {
  const stripe = useStripe()
  const elements = useElements()

  const [ errorMessage, setErrorMessage ] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if(elements == null) {
      return
    }

    const {error: submitError} = await elements.submit()

    if(submitError) {
      setErrorMessage(submitError.message)
      return
    }

    const res = await fetch('http://localhost:8332/api/stripe/create-intent', {
      method: 'POST',
      body: JSON.stringify({
        amount: (user.cart.total_amount * 100),
        currency: 'usd',
        description: 'payment for an order',
        metadata: {
          subscription: false,
        }
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const { clientSecret } = await res.json()

    const {error} = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: `http://localhost:8332/order-confirmation/`,
      },
    })

    if (error) {
      setErrorMessage(error.message);
    } else {
      
    }
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <PaymentElement />
        <button type="submit" disabled={!stripe || !elements}>
          Pay
        </button>
        {errorMessage && <div>{errorMessage}</div>}
      </form>
    </Wrapper>
  )
}

export default PaymentInfo
