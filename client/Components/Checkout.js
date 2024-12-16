import React from 'react'
import styled from 'styled-components'
import { FlexContainer, FlexColContainer } from './styled-components/layout'
import { DeliveryInfo, PaymentInfo, Cart } from '../Components'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const Wrapper = styled(FlexColContainer)`
  background-color: red;
  align-items: flex-start;
`

const stripePromise = loadStripe('pk_test_boVpPXdOD3YjGBl4JtxIxqOd008Ys4atEG')
const options = {
  mode: 'payment',
  amount: 1099,
  currency: 'usd',
}

const Checkout = ({ user, refetchUser }) => {
  return (
    <Wrapper>
      <Cart user={user} />
      <DeliveryInfo user={user} refetchUser={refetchUser} />
      <Elements stripe={stripePromise} options={options}>
        <PaymentInfo user={user} refetchUser={refetchUser} />
      </Elements>
    </Wrapper>
  )
}

export default Checkout
