import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 30vh;
  width: 24%;
  padding: 0.5%;
`

const ProductCard = ({ product }) => (
  <Wrapper>
    <div>{product.name}</div>
  </Wrapper>
)

export default ProductCard
