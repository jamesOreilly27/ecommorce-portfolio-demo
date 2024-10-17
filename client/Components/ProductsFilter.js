import React, { useState } from 'react'
import styled from 'styled-components'
import { FlexContainer, FlexColContainer, Title } from './styled-components/layout'
import { FilterMenuType } from '../Components'

const Wrapper = styled(FlexColContainer)`

`

const ProductsFilter = () => {
  const filterMenusList = [
    {
      header: "Roast Level",
      categories: ["Light Roast", "Medium Roast", "Dark Roast"]
    },
    {
      header: "Caffeine Level",
      categories: ["Regular Caffeine", "Decaf", "Half Caf"]
    }
  ]

  return (
    <Wrapper>
      {filterMenusList.map(menu => {
        return <FilterMenuType menu={menu} />
      })}
    </Wrapper>
  )
}

export default ProductsFilter
