import React from 'react'
import styled from 'styled-components'
import { Navlink } from '../Components'
import { FlexContainer } from './styled-components/layout'

const Wrapper = styled(FlexContainer)`
  font-size: 18px;
  flex: 6;
  padding: 0.7em;
`

const Navbar = ({ categories }) => {
  const navItems = [
    { id: 1, name: 'Shop', linkTo: '/categories', dropdownList: categories },
    { id: 2, name: 'Subscribe', linkTo: '/subscribe', dropdownList: [{ id: 1, name: "testingSubscribe" }] },
    { id: 3, name: 'Gifts', linkTo: '/products', dropdownList: [{ id: 1, name: "testingGifts" }]  }
  ]
  return (
    <Wrapper>
      {navItems.map(item => <Navlink key={item.id} item={item} />)}
    </Wrapper>
  )
}

export default Navbar
