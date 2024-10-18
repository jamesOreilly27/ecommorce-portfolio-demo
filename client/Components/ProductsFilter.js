import React, { useState } from 'react'
import styled from 'styled-components'
import { FlexContainer, FlexColContainer, Title } from './styled-components/layout'
import { CoffeeTypes } from '../Components'
import { buildMenu, buildMiscMenu } from './helpers'

const Wrapper = styled(FlexColContainer)`

`

const ProductsFilter = ({ categories, handleSelect }) => {
  const coffeeTypes = [
    { id: 1, header: "Roast Level", selector: 'roast', categories: [] },
    { id: 2, header: "Caffeine", selector: 'caf', categories: [] },
  ]

  const miscType = { id: 1, header: "Gifts and Treats", categories: [] }

  const coffeeTypeMenu = buildMenu(coffeeTypes, categories)
  console.log('TESTING: ', coffeeTypeMenu)
  const miscTypeMenu = buildMiscMenu(miscType, categories)

  return (
    <Wrapper>
      <CoffeeTypes menu={coffeeTypeMenu} handleSelect={handleSelect} />

    </Wrapper>
  )
}

export default ProductsFilter
