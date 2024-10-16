import React from 'react'
import styled from 'styled-components'
import { useGetProductsQuery } from "../store/slices/productSlice"
import { ProductCard } from '../Components'
import { featuredFilter } from './helpers'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: ${({ featured }) => featured ? 'nowrap' : 'wrap'}
`

const ProductList = ({ featured }) => {
  const { data, isLoading, isError } = useGetProductsQuery()
  if(isLoading) {
    return <div> Loading... </div>
  }

  if(isError) {
    return <div> Error fetching data </div>
  }

  const filteredProducts = featuredFilter(data, featured)

  return (
    <Wrapper>
      {filteredProducts.map(product => {
        return ( <ProductCard key={product.id} product={product} /> )
      })}
    </Wrapper>
  )
}

export default ProductList
