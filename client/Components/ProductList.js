import React from 'react'
import styled from 'styled-components'
import { ProductCard, PageNumbers } from '../Components'
import { FlexContainer, FlexColContainer } from './styled-components/layout'

const Wrapper = styled(FlexColContainer)`
  
`

const ProductContainer = styled(FlexContainer)`
  flex-wrap: ${({ featured }) => featured ? 'nowrap' : 'wrap'}
`

const ProductList = ({ products, numPages, activePage, incrementPage, decrementPage }) => {
  return (
    <Wrapper>
      <ProductContainer>
        {products&& products.map(product => {
          return ( <ProductCard key={product.id} product={product} /> )
        })}
      </ProductContainer>
      {activePage &&
        <PageNumbers
          numPages={numPages}
          activePage={activePage}
          incrementPage={incrementPage}
          decrementPage={decrementPage}
        />
    
      }
    </Wrapper>
  )
}

export default ProductList
