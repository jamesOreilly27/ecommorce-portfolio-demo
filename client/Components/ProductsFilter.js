import React, { useState } from 'react'
import styled from 'styled-components'
import { FlexContainer, FlexColContainer, Title } from './styled-components/layout'
import { FilterMenuType } from '../Components'
import { buildMenu } from './helpers'

const Wrapper = styled(FlexColContainer)`

`

const ProductsFilter = ({ categories, handleSelect }) => {
  const menusList = [
    { id: 1, header: "Roast Level", selector: 'roast', categories: [] },
    { id: 2, header: "Caffeine", selector: 'caf', categories: [] }
  ]

  const builtMenu = buildMenu(menusList, categories)

  return (
    <Wrapper>
      {builtMenu.map(menu => {
        return <FilterMenuType key={menu.id} menu={menu} handleSelect={handleSelect} />
      })}
    </Wrapper>
  )
}

export default ProductsFilter
