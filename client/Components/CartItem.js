import React, { useState } from 'react'
import styled from 'styled-components'
import { FlexContainer, FlexColContainer, Title } from './styled-components/layout'

const Wrapper = styled(FlexContainer)`
  justify-content: flex-start;
  align-items: center;
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
  align-items: center;
`

const TitlesContainer = styled(FlexColContainer)`
  
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

const TotalPrice = styled(Title)`

`

const CartItem = ({ item, handleIncrement, handleDecrement }) => {
  return (
    <Wrapper>
      <Image src={'/images/Ground Coffee.png'} />
      <NewContainer>
        <TitlesContainer>
          <ProductTitle>
            {item.product.name}
          </ProductTitle>
          <div>{item.product.name}</div>
        </TitlesContainer> 
        <ProductInfo>
          <PriceContainer>{`$${item.product.price}`}</PriceContainer>
          <QuantityControlContainer>
            <Clicker onClick={handleDecrement}>
              -
            </Clicker>
            <div>{item.quantity}</div>
            <Clicker onClick={handleIncrement}>
              +
            </Clicker>
          </QuantityControlContainer>
        </ProductInfo>
      </NewContainer>
      <TotalPrice>
        {`$${item.price}`}
      </TotalPrice>
    </Wrapper>
  )
}

export default CartItem
