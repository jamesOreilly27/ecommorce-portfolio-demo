import React from 'react'
import styled from 'styled-components'
import { Navbar, UserHeaderSection } from '../Components'
import { FlexContainer } from './styled-components/layout'

const Wrapper = styled(FlexContainer)`
  height: 15.5vh;
  background-color: #D2B48C;
`

const Logo = styled.div`
  background-image: url('/images/logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  min-width: 80px;
  max-height: 80px;
`

const Header = ({ user }) => (
  <Wrapper>
    <Logo />
    <Navbar />

    <UserHeaderSection user={user} />
  </Wrapper>
)

export default Header
