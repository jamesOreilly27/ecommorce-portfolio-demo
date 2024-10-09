import React from 'react'
import styled from 'styled-components'
import { Navbar } from '../Components'

const Wrapper = styled.div`
  display: flex;
  height: 10%;
  width: 100%;
  background-color: red;
`

const Logo = styled.img`
  width: 90px;
  height: 90px;
`

const Header = () => (
  <Wrapper>
    <Logo src="/images/logo.png" />
    <Navbar />
  </Wrapper>
)

export default Header
