import React from 'react'
import styled from 'styled-components'
import { CategoryCard } from  '../Components'
import { FlexContainer } from './styled-components/layout'
import { NoDecLink } from './styled-components/clickables'
import { featuredFilter } from './helpers'

const Wrapper = styled(FlexContainer)`
  
`

const Categories = ({ categories, featured }) => {

  const filteredCategories = featuredFilter(categories, featured)

  return (
    <Wrapper>
      {filteredCategories && filteredCategories.map(category =>
        <CategoryCard key={category.id} category={category} imgSource={`/images/${category.name}.png`} />
      )}
    </Wrapper>
  )
}

export default Categories
