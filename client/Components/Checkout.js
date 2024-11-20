import React from 'react'
import styled from 'styled-components'
import { FlexContainer, FlexColContainer } from './styled-components/layout'
import { DeliveryInfo, PaymentInfo, Cart } from '../Components'

const Wrapper = styled(FlexColContainer)`

`

const Checkout = ({  }) => {
  return (
    <Wrapper>
      <DeliveryInfo />
      <PaymentInfo />
      <Cart />
    </Wrapper>
  )
}

export default Checkout
