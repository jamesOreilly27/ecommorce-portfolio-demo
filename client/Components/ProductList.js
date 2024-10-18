import React from 'react'
import styled from 'styled-components'
import { ProductCard } from '../Components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: ${({ featured }) => featured ? 'nowrap' : 'wrap'}
`

const ProductList = ({ products }) => {
  return (
    <Wrapper>
      {products&& products.map(product => {
        return ( <ProductCard key={product.id} product={product} /> )
      })}
    </Wrapper>
  )
}

export default ProductList
