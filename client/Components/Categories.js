import React from 'react'
import styled from 'styled-components'
import { useFeaturdCategoriesQuery } from '../store/slices'
import { CategoryCard } from  '../Components'
import { FlexContainer } from './styled-components/layout'

const Wrapper = styled(FlexContainer)`
  
`

const Categories = () => {
  const { data, isLoading, isError } = useFeaturdCategoriesQuery()

  if(isLoading) {
    return ( <div> Loading... </div> )
  }

  if(isError) {
    return ( <div> Error Fetching Data </div> )
  }

  return (
    <Wrapper>
      {data.map(category =>
        <CategoryCard key={category.id} category={category} imgSource={`/images/${category.name}.png`} />
      )}
    </Wrapper>
  )
}

export default Categories
