import React from 'react'
import styled from 'styled-components'
import { FlexContainer, FlexColContainer } from './styled-components/layout'

const Wrapper = styled(FlexColContainer)`
  z-index: 5;
  background-color: #D2B48C;

  div {
    border: 1px solid #333333;
  }
`

const DropdownItem = styled(FlexContainer)`
  justify-content: center;
  align-items: center;
  font-size: 12px;

  &:hover {
    color: #F8F8F8;
    background-color: #7B6246;
    transition: all .7s;
  }
`

const DropdownMenu = ({ menu, render }) => { 
  console.log('MENU: ', menu)
  return (
    <Wrapper>
      {menu && menu.map(menuItem => {
        return (
          <DropdownItem>
            {menuItem.name}
          </DropdownItem>
        )
      })}
    </Wrapper>
  )
}

export default DropdownMenu
