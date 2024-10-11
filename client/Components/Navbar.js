import React from 'react'
import styled from 'styled-components'
import { Navlink } from '../Components'
import { FlexContainer } from './styled-components/layout'

const Wrapper = styled(FlexContainer)`
  width: 60%;
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
