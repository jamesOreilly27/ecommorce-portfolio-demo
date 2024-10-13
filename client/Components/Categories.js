import React from 'react'
import styled from 'styled-components'
import { CategoryCard } from  '../Components'
import { FlexContainer } from './styled-components/layout'

const Wrapper = styled(FlexContainer)`
  
`

const Categories = ({ categories }) => {
  return (
    <Wrapper>
      {categories.map(category =>
        <CategoryCard key={category.id} category={category} imgSource={`/images/${category.name}.png`} />
      )}
    </Wrapper>
  )
}

export default Categories
