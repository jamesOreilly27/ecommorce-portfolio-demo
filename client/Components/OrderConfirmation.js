import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import styled from 'styled-components'
import { FlexContainer, FlexColContainer } from './styled-components/layout'
import { useCreateOrderMutation } from '../store/slices'
//import {  } from '../Components

const Wrapper = styled(FlexContainer)`

`

const OrderConfirmation = ({ user, refetchUser }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const redirectStatus = searchParams.get('redirect_status')
  const[ createOrder ] = useCreateOrderMutation()

  const [paymentSuccessful, setPaymentSuccessful] = useState(true)
  
  useEffect(() => {
    if(paymentSuccessful && redirectStatus === 'succeeded') {
      createOrder({
        order: {
            orderDate: new Date(),
            total_amount: user.cart.total_amount,
          },
          cartItems: user.cart['cart-items']
      })
      .then(() => {
        refetchUser()
      })
    }

    setPaymentSuccessful(false)
  }), [paymentSuccessful, setPaymentSuccessful, refetchUser]

  return (
    <Wrapper>
      Hello from Order Confirmation
    </Wrapper>
  )
}

export default OrderConfirmation
