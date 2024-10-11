import React from 'react'
import styled from 'styled-components'
import { useGetCategoriesQuery } from '../store/slices'
import { CategoryCard } from  '../Components'

const Wrapper = styled.div`
  background-color: red;
  width: 100vw;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
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
