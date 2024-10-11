import React from 'react'
import styled from 'styled-components'
import { Banner, Categories, ProductList } from '../Components'
import { Container, Title } from './styled-components/layout'

const Wrapper = styled.div`
  
`

const FeatProducts = styled(Container)`
  background-color: #D2B48C;
  width: 100vw;
`

const SectionTitle = styled(Title)`
  display: flex;
  justify-content: center;
`

const Homepage = () => (
  <Wrapper>
    <Banner />
    <Categories />
    <FeatProducts>
      <SectionTitle> Our Favorites </SectionTitle>
      <ProductList featured />
    </FeatProducts>
  </Wrapper>
)

export default Homepage
