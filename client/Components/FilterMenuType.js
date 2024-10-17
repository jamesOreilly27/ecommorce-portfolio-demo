import React, { useState } from 'react'
import styled from 'styled-components'
import { FlexContainer, FlexColContainer, Title } from './styled-components/layout'
//import {  } from '../Components

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
        <Clicker onClick={handleClick}>
          {">"}
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

