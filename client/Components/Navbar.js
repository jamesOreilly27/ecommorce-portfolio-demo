import React from 'react'
import styled from 'styled-components'
import { Navlink } from '../Components'

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-around;
  width: 55%;
  margin-left: -20px;
  align-items: center;
`

const navItems = [
  { name: 'Shop', linkTo: '/collections' },
  { name: 'Subscriptions', linkTo: '/subscribe' },
  { name: 'Contact Us', linkTo: '/contact' }
]

const Navbar = () => (
  <Wrapper>
    {navItems.map(item => <Navlink key={item.name} item={item} />)}
  </Wrapper>
)

export default Navbar
