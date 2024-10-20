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

const ProductDetailView = ({ user }) => {
  const params = useParams()
  const { data, isLoading, isError } = useGetProductByIdQuery(parseInt(params.id))
  const [addItem] = useCreateCartItemMutation()

  const [itemToAdd, setItemToAdd] = useState({
    cartId: user.cart.id,
    productId: 0,
    quantity: 1,
    style: "Whole Bean",
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
    console.log(parseInt(size[0]))
    setItemToAdd(Object.assign({...itemToAdd, bag_size: parseInt(size[0])}))
  }

  const handleAdd = () => {
    addItem(itemToAdd)
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
          selected={itemToAdd.style}
          handleClick={handleStyleSelect}
        />
        <SelectorContainer
          options={['1 lb', '2 lb', '5 lb']}
          selected={itemToAdd.bag_size}
          handleClick={handleSizeSelect}
        />
        <Button
          width={40}
          height={35}
          onClick={handleAdd}
        >
          Add to cart
        </Button>
      </DetailContainer>
    </Wrapper>
  )
}

export default ProductDetailView
