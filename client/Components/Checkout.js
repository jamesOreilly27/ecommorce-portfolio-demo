import React from 'react'
import styled from 'styled-components'
import { FlexContainer, FlexColContainer } from './styled-components/layout'
import { DeliveryInfo, PaymentInfo, Cart } from '../Components'

const Wrapper = styled(FlexColContainer)`
  background-color: red;
  align-items: flex-start;
`

const Checkout = ({ user, refetchUser }) => {
  return (
    <Wrapper>
      <DeliveryInfo user={user} refetchUser={refetchUser} />
      <PaymentInfo />
      <Cart />
    </Wrapper>
  )
}

export default Checkout
