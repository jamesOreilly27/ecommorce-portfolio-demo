import React, { useState } from 'react'
import styled from 'styled-components'
import { Navbar, IconLink, OrderItemList } from '../Components'
import { FlexContainer, FlexColContainer } from './styled-components/layout'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart'

const Wrapper = styled(FlexContainer)`
  height: 12vh;
  background-color: #D2B48C;
`

const Logo = styled.div`
  background-image: url('/images/logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  min-width: 60px;
  flex: 1;
`

const IconContainer = styled(FlexColContainer)`
  background-color: green;
  width: 15em;
`

const Icons = styled(FlexContainer)`

`

const Header = ({ user, categories }) => {
  const [displayCart, setDisplayCart] = useState(false)
  return (
    <Wrapper>
      <Logo />
      <Navbar categories={categories} />
      <IconContainer>
        <Icons>
          <IconLink icon={faUserCircle} route="/account" user={user} size="2x" />
          <IconLink icon={faShoppingCart} route="/cart" user={user} size="2x" isCart setDisplayCart={setDisplayCart} />
        </Icons>
        {true &&
          <OrderItemList cart={user.cart} />
        }
      </IconContainer>
    </Wrapper>
  )
}

export default Header
