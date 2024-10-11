import React from 'react'
import styled from 'styled-components'
import { Navlink } from '../Components'
import { FlexContainer } from './styled-components/layout'

const Wrapper = styled(FlexContainer)`
  font-size: 18px;
  flex: 6;
  padding: 0.7em;
`

const navItems = [
  { name: 'Shop', linkTo: '/collections' },
  { name: 'Subscribe', linkTo: '/subscribe' },
  { name: 'Gifts', linkTo: '/gifts' }
]

const Navbar = () => (
  <Wrapper>
    {navItems.map(item => <Navlink key={item.name} item={item} />)}
  </Wrapper>
)

export default Navbar
