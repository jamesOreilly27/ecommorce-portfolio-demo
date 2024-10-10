import React from 'react'
import { useGetProductsQuery } from "../store/productSlice"

const ProductList = () => {
  const { data, isLoading, isError } = useGetProductsQuery()
  if(isLoading) {
    return <div> Loading... </div>
  }

  if(isError) {
    return <div> Error fetching data </div>
  }

  return (
    <ul>
      {data.map(product => {
        return <li key={product.id}> {product.name} </li>
      })}
    </ul>
  )
}

export default ProductList
