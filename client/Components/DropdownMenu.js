import React from 'react'
import styled from 'styled-components'
import { FlexContainer, FlexColContainer } from './styled-components/layout'
import { NoDecLink } from './styled-components/clickables'

const Wrapper = styled(FlexColContainer)`
  z-index: 5;
  background-color: #D2B48C;

  a {
    border: 1px solid #333333;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;

    &:hover {
      color: #F8F8F8;
      background-color: #7B6246;
      transition: all .7s;
    }
  }
`

const DropdownItem = styled(NoDecLink)`
  display: flex;
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
  const renderCheck = menu.links && render
  return (
    <Wrapper>
      {renderCheck && menu.links.map(link => {
        return (
          <DropdownItem key={link.id} to={`${menu.basePath}/${link.id}`}>
            {link.name}
          </DropdownItem>
        )
      })}
    </Wrapper>
  )
}

export default DropdownMenu
