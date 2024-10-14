import React, { useState } from 'react'
import styled from 'styled-components'
import { FlexContainer, FlexColContainer } from './styled-components/layout'
import { useGetProductByIdQuery } from '../store/slices'

const Wrapper = styled(FlexContainer)`
  justify-content: flex-start;
`

const Image = styled.img`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 60px;
  height: 60px;
`

const NewContainer = styled(FlexContainer)`
  min-width: 37vw;
  justify-content: space-between;
`

const TitlesContainer = styled(FlexColContainer)`
  min-width: 30vw;
`

const ProductTitle = styled.div`
  font-size: 18px;
  font-weight: bold;
`

const CategoryTitle = styled.div`
 font-size: 14px;
`

const ProductInfo = styled(FlexColContainer)`
  width: 5em;
  align-items: center;
`

const QuantityControlContainer = styled(FlexContainer)`
  align-items: center;
  padding: 0;
  width: 100%;
`

const Clicker = styled(FlexContainer)`
  width: 10px;
  height: 10px;
  border-radius: 30%;
  border: 1px solid black;
  align-items: center;
  justify-content: center;
`
 
const PriceContainer = styled(FlexContainer)`
  align-items: center;
  justify-content: center;
  width: 100%;
`

const CartItem = ({ item }) => {
  const { data: product, isLoading, isError } = useGetProductByIdQuery(item.productId)
  console.log('PRODUCT: ', product)
  return (
    <Wrapper>
      <Image src={'/images/Ground Coffee.png'} />
      {product &&
        <NewContainer>
          <TitlesContainer>
            <ProductTitle>
              {product.name}
            </ProductTitle>
            <div>{product.categories[0].name}</div>
          </TitlesContainer> 
          <ProductInfo>
            <PriceContainer>{`$${product.price}`}</PriceContainer>
            <QuantityControlContainer>
              <Clicker>
                -
              </Clicker>
              <div>{item.quantity}</div>
              <Clicker>
                +
              </Clicker>
            </QuantityControlContainer>
          </ProductInfo>
        </NewContainer>
      }
    </Wrapper>
  )
}

export default CartItem
