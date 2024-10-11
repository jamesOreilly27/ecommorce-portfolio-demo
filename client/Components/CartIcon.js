import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart'

const Wrapper = styled(Link)`
  font-family: 'Scope One', serif;
  color: #F8F8F8;
  max-height: 48px;
  max-width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`

 const Cart = styled(FontAwesomeIcon)`
  color: #333333;
`
const QuantityBubble = styled.div`
  position: absolute;
  background-color: #896A41;
  border-radius: 50%;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -1em;
  right: -0.3em;
`

const CartIcon = ({ cart }) => (
  <Wrapper to="/cart">
    <Cart icon={faShoppingCart} size="3x" />
    <QuantityBubble>
      {cart['cart-items'].length}
    </QuantityBubble>
  </Wrapper>
)

export default CartIcon
