import React, { useState } from 'react'
import styled from 'styled-components'
import ReactStars from "react-rating-stars-component"
import { useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../store/slices'
import { FlexColContainer, FlexContainer, Title } from './styled-components/layout'
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

const ReviewsContainer = styled(FlexContainer)`

`

// const SelectorContainer = styled(FlexContainer)`
//   height: 20%;
//   width: 100%;
//   background-color: green;
//   margin: 10px 0;
// `

const ProductDetailView = ({  }) => {
  const params = useParams()
  const { data, isLoading, isError } = useGetProductByIdQuery(parseInt(params.id))

  if(isLoading) {
    return <div> Loading...</div>
  }

  if(isError) {
    return <div>Error fetching Data</div>
  }

  console.log('DATA: ', data)

  return (
    <Wrapper>
      <ImageContainer>
        Image PlaceHolder
      </ImageContainer>
      <DetailContainer>
        <DetailHeader>
          <Title>{data.name}</Title>
          <ReviewsContainer>
            <ReactStars rating={getReviewAvg(data.reviews)} />
          </ReviewsContainer>
        </DetailHeader>
        <SelectorContainer options={{time: 10}} />
        <SelectorContainer options={{time: 10}} />
      </DetailContainer>
    </Wrapper>
  )
}

export default ProductDetailView
