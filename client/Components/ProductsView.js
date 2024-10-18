import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { FlexContainer, FlexColContainer } from './styled-components/layout'
import { ProductsFilter, ProductList } from '../Components'
import { useGetProductsQuery } from '../store/slices'

const Wrapper = styled(FlexContainer)`

`

const ProductsView = ({ categories }) => {
  const [categoryIds, setCategoryIds] = useState([])
  const [isCoffeeFilter, setIsCoffeeFilter] = useState(false)
  const { data, isLoading, isError, refetch } = useGetProductsQuery(categoryIds.join(), isCoffeeFilter)

  const handleSelect = id => {
    if(categoryIds.includes(id)) {
      setCategoryIds(categoryIds.filter(catId => id !== catId))
    } else {
      setCategoryIds(categoryIds.concat(id))
    }

    refetch()
  }
  
  return (
    <Wrapper>
      <ProductsFilter categories={categories} handleSelect={handleSelect} />
      <ProductList products={data}/>
    </Wrapper>
  )
}

export default ProductsView
