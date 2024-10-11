import React from 'react'
import styled from 'styled-components'
import { Banner, Categories, ProductList } from '../Components'
import { FlexColContainer, Title } from './styled-components/layout'
import { Button } from './styled-components/clickables'

const Wrapper = styled.div`
  
`

const FeatProducts = styled(FlexColContainer)`
  align-items: center;
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
      <Button height={35} width={35} backgroundColor='green'>
        view all
      </Button>
    </FeatProducts>
  </Wrapper>
)

export default Homepage
