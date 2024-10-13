import React from 'react'
import styled from 'styled-components'
import { Navbar, IconLink } from '../Components'
import { FlexContainer } from './styled-components/layout'
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

const Header = ({ user, categories }) => (
  <Wrapper>
    <Logo />
    <Navbar categories={categories} />
    <IconLink icon={faUserCircle} route="/account" user={user} size="2x" />
    <IconLink icon={faShoppingCart} route="/cart" user={user} size="2x" isCart />
  </Wrapper>
)

export default Header
