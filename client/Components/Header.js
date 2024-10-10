import React from 'react'
import styled from 'styled-components'
import { Navbar, UserHeaderSection } from '../Components'

const Wrapper = styled.div`
  display: flex;
  height: 20vh;
  background-color: #D2B48C;
`

const Logo = styled.div`
  background-image: url('/images/logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  min-width: 10vw;
  min-height: 10vw;
`

const Header = () => (
  <Wrapper>
    <Logo />
    <Navbar />
    <UserHeaderSection />
  </Wrapper>
)

export default Header
