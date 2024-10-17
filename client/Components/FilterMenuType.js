import React, { useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { FlexContainer, FlexColContainer, Title } from './styled-components/layout'
//import {  } from '../Components

const rotateAnimation = keyframes`
  0% { transform: rotate(180deg); }
  100% { transform: rotate(0deg); }
`

const rotateBack = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(180deg); }
`

const Wrapper = styled(FlexColContainer)`

`

const Header = styled(FlexContainer)`
  width: 10em;
  align-items: flex-start;
`

const MenuTitle = styled(Title)`
  margin: 0;
`

const Clicker = styled(FlexContainer)`
  padding: .1em;
  transform: ${({ itemsDisplay }) =>
    itemsDisplay
      ? "rotate(0deg);"
      : "rotate(180deg);"
  }
  ${({ itemsDisplay }) =>
    itemsDisplay
      ? css`animation: ${rotateAnimation} .4s ease-in-out`
      : css`animation: ${rotateBack} .4s ease-in-out`
  }}
`

const FilterMenuType = ({ menu }) => {
  const [ itemsDisplay, setItemsDisplay ] = useState(false)

  const handleClick = () => {
    setItemsDisplay(!itemsDisplay)
  }
  return (
    <Wrapper>
      {console.log(itemsDisplay)}
      <Header>
        <MenuTitle>
          {menu.header}
        </MenuTitle>
        <Clicker onClick={handleClick} itemsDisplay={itemsDisplay}>
          {"^"}
        </Clicker>
      </Header>
      {itemsDisplay &&
        menu.categories.map(category => {
          return <div key={category}> {category} </div>
        })
      }
    </Wrapper>
  )
}

export default FilterMenuType

