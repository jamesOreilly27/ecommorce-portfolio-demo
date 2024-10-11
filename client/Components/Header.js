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

const Header = ({ user }) => (
  <Wrapper>
    <Logo />
    <Navbar />
    <IconLink icon={faUserCircle} user={user} />
    <IconLink icon={faShoppingCart} user={user} />
  </Wrapper>
)

export default Header
