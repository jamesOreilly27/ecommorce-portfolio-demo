import React, { useState, useEffect } from 'react'
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

  const [itemToAdd, setItemToAdd] = useState({
    cartId: 0,
    productId: 0,
    quantity: 1,
    style: "",
    bag_size: 1,
    price: 1
  })

  useEffect(() => {
    if (data) {
      setItemToAdd(Object.assign({...itemToAdd, productId: data.id, price: 1 * data.price}))
    }
  }, [data])

  const handleStyleSelect = coffeeStyle => {
    setItemToAdd(Object.assign({...itemToAdd, style: coffeeStyle}))
  }

  const handleSizeSelect = size => {
    setItemToAdd(Object.assign({...itemToAdd, box_size: size}))
  }

  console.log('DATA: ', data)

  if(isLoading) {
    return <div> Loading...</div>
  }

  if(isError) {
    return <div>Error fetching Data</div>
  }

  return (
    <Wrapper>
      {console.log('TESTING: ', itemToAdd)}
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
        <SelectorContainer
          options={['Whole Bean', 'Ground Coffee', 'Pods']}
          handleClick={handleStyleSelect}
        />
        <SelectorContainer
          options={['1 lb', '2 lb', '5 lb']}
          handleClick={handleSizeSelect}
        />
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
