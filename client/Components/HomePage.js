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

const FeatProductsLink = styled(NoDecLink)`
  width: 10vw;
`

const Homepage = ({ reviews, categories }) => (
  <Wrapper>
    <Banner />
    <Categories categories={categories} featured />
    <FeatProducts>
      <SectionTitle> Our Favorites </SectionTitle>
      <ProductList featured />
      <FeatProductsLink to={`/products`}>
        <Button width={100} height={35}>
          view all
        </Button>
      </FeatProductsLink>
    </FeatProducts>
    <CustomerReviews reviews={reviews} />
  </Wrapper>
)

export default Homepage
