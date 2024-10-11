import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 30vh;
  width: 25%;
`

const ProductCard = ({ product }) => (
  <Wrapper>
    <div>{product.name}</div>
  </Wrapper>
)

export default ProductCard
