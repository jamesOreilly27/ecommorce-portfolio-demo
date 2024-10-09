import React from 'react'
import styled from 'styled-components'

const Logo = styled.img`
  width: 90px;
  height: 90px;
`

const Header = () => (
  <div>
    <Logo src="/images/logo.png" />
  </div>
)

export default Header
