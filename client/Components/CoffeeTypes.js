import React, { useState } from 'react'
import styled from 'styled-components'
import { FlexContainer, FlexColContainer } from './styled-components/layout'
import { FilterMenuType } from '../Components'

const Wrapper = styled(FlexColContainer)`

`

const CoffeeTypes = ({ menu, handleSelect }) => {
  return (
    <Wrapper>
      {menu && menu.map(menu => {
        return <FilterMenuType key={menu.id} menu={menu} handleSelect={handleSelect} />
      })}
    </Wrapper>
  )
}

export default CoffeeTypes
