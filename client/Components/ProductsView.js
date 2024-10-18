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
  const { data, isLoading, isError, refetch } = useGetProductsQuery({categoryIds: categoryIds.join(), isCoffeeFilter: isCoffeeFilter })

  const manageSelections = id => {
    console.log("ID TESTING: ", id)
    if(categoryIds.includes(id)) {
      setCategoryIds(categoryIds.filter(catId => id !== catId))
    } else {
      setCategoryIds(categoryIds.concat(id))
    }
  }

  const handleCoffeeSelect = id => {
    manageSelections(id)
    setIsCoffeeFilter(true)
    refetch()
  }

  const handleMiscSelect = id => {
    console.log("FIRING HANDLE MISC SELECT")
    manageSelections(id)
    setIsCoffeeFilter(false)
    refetch()
  }
  
  return (
    <Wrapper>
      <ProductsFilter
        categories={categories}
        handleCoffeeSelect={handleCoffeeSelect}
        handleMiscSelect={handleMiscSelect}
      />
      <ProductList products={data}/>
    </Wrapper>
  )
}

export default ProductsView
