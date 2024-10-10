import React from 'react'
import styled from 'styled-components'
import { Navbar, UserHeaderSection } from '../Components'

const Wrapper = styled.div`
  display: flex;
  height: 20vh;
  background-color: #D2B48C;
  justify-content: space-around;
`

const Logo = styled.div`
  background-image: url('/images/logo.png');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  min-width: 100px;
  min-height: 100px;
`

const Header = ({ user }) => (
  <Wrapper>
    <Logo />
    <Navbar />
    <UserHeaderSection user={user} />
  </Wrapper>
)

export default Header
