import React from 'react'
import styled from 'styled-components'
import { FlexContainer, FlexColContainer } from './styled-components/layout'
import { ProductsFilter, ProductList } from '../Components'

const Wrapper = styled(FlexContainer)`

`

const ProductsView = () => {
  return (
    <Wrapper>
      <ProductsFilter />
      <ProductList />
    </Wrapper>
  )
}

export default ProductsView
