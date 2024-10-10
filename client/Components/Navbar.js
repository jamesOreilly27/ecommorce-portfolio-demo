import React from 'react'
import styled from 'styled-components'
import { Navlink } from '../Components'

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-bewteen;
  width: 55%;
  margin-left: -3vw;
`

const navItems = [
  { name: 'Shop', linkTo: '/collections' },
  { name: 'Subscribe', linkTo: '/subscribe' },
  { name: 'About Us', linkTo: '/about' }
]

const Navbar = () => (
  <Wrapper>
    {navItems.map(item => <Navlink key={item.name} item={item} />)}
  </Wrapper>
)

export default Navbar
