import React from 'react'
import styled from 'styled-components'
import { Banner, Categories, ProductList } from '../Components'
import { Container } from './styled-components/layout'

const Wrapper = styled.div`
  
`

const FeatProducts = styled(Container)`
  background-color: #D2B48C;
  width: 100vw;
`

const Homepage = () => (
  <Wrapper>
    <Banner />
    <Categories />
    <FeatProducts>
      <ProductList featured />
    </FeatProducts>
  </Wrapper>
)

export default Homepage
