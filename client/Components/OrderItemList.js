import React, { useState } from 'react'
import styled from 'styled-components'
import { FlexContainer, FlexColContainer } from './styled-components/layout'
import { CartItem } from '../Components'

const Wrapper = styled(FlexColContainer)`
  min-width: 56vw;
  background-color: red;
  position: absolute;
  top: 4.2em;
  right: -1em
`

const OrderItemList = ({ items }) => {
  return (
  <Wrapper>
    {items.map(item => {
      return <CartItem key={item.id} size="sm" item={item} />
    })}
  </Wrapper>
  )
}

export default OrderItemList
