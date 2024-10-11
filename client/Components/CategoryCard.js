import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  border-radius: 30px;
  min-height: 100%;
  min-width: 24%;
  background-color: yellow;
  padding: 0.2em;
  margin: .5em;
`

const CategoryCard = ({ category }) => (
  <Wrapper>
    This is a category card
  </Wrapper>
)

export default CategoryCard
