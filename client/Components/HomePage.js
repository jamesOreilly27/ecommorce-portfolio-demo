import React from 'react'
import styled from 'styled-components'
import { Banner, Categories, ProductList, CustomerReviews } from '../Components'
import { FlexColContainer, Title } from './styled-components/layout'
import { Button, NoDecLink } from './styled-components/clickables'

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

const Homepage = ({ reviews, categories }) => (
  <Wrapper>
    {/* <Banner /> */}
    <Categories categories={categories} featured />
    <FeatProducts>
      <SectionTitle> Our Favorites </SectionTitle>
      <ProductList featured />
      <NoDecLink to={`/products`}>
        <Button height={35} width={13}>
          view all
        </Button>
      </NoDecLink>
    </FeatProducts>
    <CustomerReviews reviews={reviews} />
  </Wrapper>
)

export default Homepage
