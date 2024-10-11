import React from 'react'
import styled from 'styled-components'
import { FlexColContainer, FlexContainer } from './styled-components/layout'

const Wrapper = styled(FlexColContainer)`
  width: 25%;
  justify-content: space-between;
  align-items: center;
`

const Image = styled(FlexContainer)`
  width: 80%;
  height: 170px;
  align-items: center;
  background-color: white;
`

const CardTitle = styled(FlexContainer)`
  width: 22vw;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
`

const Price = styled(FlexContainer)`
  align-items: center;
  font-size: 15px;
`

const ProductCard = ({ product }) => (
  <Wrapper>
    <Image>
      Image Placeholder
    </Image>
    <CardTitle>
      {product.name}
    </CardTitle>
    <Price>
      {`$${product.price}`}
    </Price>
  </Wrapper>
)

export default ProductCard
