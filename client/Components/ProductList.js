import React from 'react'
import styled from 'styled-components'
import { useGetProductsQuery } from "../store/slices/productSlice"
import { ProductCard } from '../Components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

const ProductList = () => {
  const { data, isLoading, isError } = useGetProductsQuery()
  if(isLoading) {
    return <div> Loading... </div>
  }

  if(isError) {
    return <div> Error fetching data </div>
  }

  return (
    <Wrapper>
      {data.map(product => {
        return ( <ProductCard key={product.id} product={product} /> )
      })}
    </Wrapper>
  )
}

export default ProductList
