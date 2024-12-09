import React, { useState } from 'react'
import styled from 'styled-components'
import { FlexContainer, FlexColContainer } from './styled-components/layout'
import { OrderItemList } from '../Components'

const Wrapper = styled(FlexContainer)`
  
`

const Cart = ({ user, isHeader }) => {

  console.log(user)
  return (
    <Wrapper>
      <OrderItemList cart={user.cart} displayCart={true} />
    </Wrapper>
  )
}

export default Cart
