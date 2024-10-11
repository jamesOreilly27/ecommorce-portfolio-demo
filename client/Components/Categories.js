import React from 'react'
import styled from 'styled-components'
import { useGetCategoriesQuery } from '../store/slices'
import { CategoryCard } from  '../Components'
import { FlexContainer } from './styled-components/layout'

const Wrapper = styled(FlexContainer)`
  background-color: red;
  height: 50vh;
`

const Categories = () => {
  const { data, isLoading, isError } = useGetCategoriesQuery()

  if(isLoading) {
    return ( <div> Loading... </div> )
  }

  if(isError) {
    return ( <div> Error Fetching Data </div> )
  }

  return (
    <Wrapper>
      {data.map(category =>
        <CategoryCard category={category} />
      )}
    </Wrapper>
  )
}

export default Categories
