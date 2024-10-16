import React from 'react'
import styled from 'styled-components'
import { FlexContainer, FlexColContainer, Title } from './styled-components/layout'
import { useGetSingleCategoryQuery } from '../store/slices'
import { useParams } from 'react-router-dom'

const Wrapper = styled(FlexContainer)`

`

const Container = styled(FlexContainer)`

`

const ProductsContainer = styled(FlexContainer)`

`

const CategoryFullView = () => {
  const params = useParams()
  console.log(params)
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
        <ProductsContainer>
          {data && data.products.map(product => {
            return <div>{product.name}</div>
          })}
        </ProductsContainer>
      </Container>
      }
    </Wrapper>
  )
}

export default CategoryFullView
