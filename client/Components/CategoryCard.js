import React from 'react'
import styled from 'styled-components'
import { FlexColContainer } from './styled-components/layout'

const Wrapper = styled(FlexColContainer)`
  border-radius: 30px;
  min-height: 80%;
  min-width: 30%;
  background-color: green;
  padding: 0.2em;
  margin: 0.2em;
`

const CategoryCard = ({ category }) => (
  <Wrapper>
    This is a category card
  </Wrapper>
)

export default CategoryCard
