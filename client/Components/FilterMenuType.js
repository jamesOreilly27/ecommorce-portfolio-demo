import React, { useState } from 'react'
import styled, { keyframes, css } from 'styled-components'
import { FlexContainer, FlexColContainer, Title } from './styled-components/layout'
import { CategoryCheckbox } from '../Components'

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
  padding: 0;
  justify-content: flex-start;
`

const MenuTitle = styled(Title)`
  margin: 0;
  flex: 2;
`

const Clicker = styled(FlexContainer)`
  padding: .1em;
  flex: 1;
  transform: ${({ itemsDisplay }) =>
    itemsDisplay
      ? "rotate(0deg);"
      : "rotate(180deg);"
  }
  ${({ itemsDisplay }) =>
    itemsDisplay
      ? css`animation: ${rotateAnimation} .1s ease-in-out`
      : css`animation: ${rotateBack} .1s ease-in-out`
  }}
`

const FilterMenuType = ({ menu, handleSelect }) => {
  const [ itemsDisplay, setItemsDisplay ] = useState(false)

  const handleArrowClick = () => {
    setItemsDisplay(!itemsDisplay)
  }

  return (
    <Wrapper>
      <Header>
        <MenuTitle>
          {menu.header}
        </MenuTitle>
        <Clicker onClick={handleArrowClick} itemsDisplay={itemsDisplay}>
          {"^"}
        </Clicker>
      </Header>
      {itemsDisplay &&
        menu.categories.map(category => {
          return (
            <CategoryCheckbox
              key={category.id}
              category={category} 
              handleSelect={handleSelect}
            />
          )
        })
      }
    </Wrapper>
  )
}

export default FilterMenuType

