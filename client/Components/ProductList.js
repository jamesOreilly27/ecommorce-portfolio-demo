import React from 'react'
import styled from 'styled-components'
import { useGetProductsQuery } from "../store/slices/productSlice"
import { ProductCard } from '../Components'

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`

const ProductList = ({ featured }) => {
  const { data, isLoading, isError } = useGetProductsQuery()
  if(isLoading) {
    return <div> Loading... </div>
  }

  if(isError) {
    return <div> Error fetching data </div>
  }

  const filteredProducts = featured
  ? data.filter((product) => product.featured === true) // Filter for featured products
  : data // Render all products if featured is false

  return (
    <Wrapper>
      {filteredProducts.map(product => {
        return ( <ProductCard key={product.id} product={product} /> )
      })}
    </Wrapper>
  )
}

export default ProductList
