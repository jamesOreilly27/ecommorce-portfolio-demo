import React from 'react'
import styled from 'styled-components'
import { FlexContainer, FlexColContainer, Title } from './styled-components/layout'
import { useGetSingleCategoryQuery } from '../store/slices'
import { useParams } from 'react-router-dom'
import { ProductCard } from '../Components'

const Wrapper = styled(FlexContainer)`

`

const Container = styled(FlexColContainer)`

`

const ContentWrapper = styled(FlexContainer)`
width: 100vw;
`

const ProductFilterContainer = styled(FlexColContainer)`
  background-color: red;
  width: 100%;
`

const ProductCardsContainer = styled(FlexContainer)`
  flex-wrap: wrap;
`

const CategoryFullView = () => {
  const params = useParams()
  const { data, isLoading, isError } = useGetSingleCategoryQuery(parseInt(params.id))

  if(isLoading) {
    return <div> Loading...</div>
  }

  if(isError) {
    return <div>Error fetching Data</div>
  }

  return (
    <Wrapper>
      {data && 
      <Container>
        <Title>
          {data.name}
        </Title>
        <ContentWrapper>
          <ProductFilterContainer>

          </ProductFilterContainer>
          <ProductCardsContainer>
            {data.products.map(product => {
              return <ProductCard key={product.id} product={product} />
            })}
          </ProductCardsContainer>
        </ContentWrapper>
      </Container>
      }
    </Wrapper>
  )
}

export default CategoryFullView
