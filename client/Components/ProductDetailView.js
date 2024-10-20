import React, { useState } from 'react'
import styled from 'styled-components'
import ReactStars from "react-rating-stars-component"
import { useParams } from 'react-router-dom'
import { useGetProductByIdQuery, useCreateCartItemMutation } from '../store/slices'
import { FlexColContainer, FlexContainer, Title } from './styled-components/layout'
import { Button } from './styled-components/clickables'
import { SelectorContainer } from '../Components'
import { getReviewAvg } from './helpers'

const Wrapper = styled(FlexContainer)`
  height: 90vh;
  width: 98vw;
`

const ImageContainer = styled(FlexContainer)`
  height: 100%;
  background-color: red;
  width: 45%;
`

const DetailContainer = styled(FlexColContainer)`
height: 100%;
width: 45%;
background-color: red;
`

const DetailHeader = styled(FlexColContainer)`

`

const DetailTitle = styled(Title)`
  margin: 0;
`

const ReviewsContainer = styled(FlexContainer)`
  justify-content: flex-start;
  font-size: 8px;
  align-items: center;
`

const ProductDetailView = ({  }) => {
  const params = useParams()
  const { data, isLoading, isError } = useGetProductByIdQuery(parseInt(params.id))

  console.log('DATA: ', data)

  if(isLoading) {
    return <div> Loading...</div>
  }

  if(isError) {
    return <div>Error fetching Data</div>
  }

  return (
    <Wrapper>
      <ImageContainer>
        Image PlaceHolder
      </ImageContainer>
      <DetailContainer>
        <DetailHeader>
          <DetailTitle>{data.name}</DetailTitle>
          <ReviewsContainer>
            <ReactStars
              value={getReviewAvg(data.reviews)}
              activeColor="#ffd700"
            />
            <div>
              {`See (${data.reviews.length}) more reviews`}
            </div>
          </ReviewsContainer>
        </DetailHeader>
        <SelectorContainer options={{time: 10}} />
        <SelectorContainer options={{time: 10}} />
        <Button
          width={40}
          height={35}
        >
          Add to cart
        </Button>
      </DetailContainer>
    </Wrapper>
  )
}

export default ProductDetailView
