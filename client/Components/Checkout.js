import React from 'react'
import styled from 'styled-components'
import { FlexContainer, FlexColContainer } from './styled-components/layout'
import { DeliveryInfo, PaymentInfo, Cart } from '../Components'

const Wrapper = styled(FlexColContainer)`

`

const Checkout = ({ user }) => {
  const { addresses } = user
  return (
    <Wrapper>
      <DeliveryInfo addresses={addresses} />
      <PaymentInfo />
      <Cart />
    </Wrapper>
  )
}

export default Checkout
