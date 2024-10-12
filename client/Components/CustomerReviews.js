import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch, useState } from 'react-redux'
import { incrementIndex, decrementIndex } from '../store/slices'
import { ReviewCard } from '../Components'
import { FlexContainer } from './styled-components/layout'

const Wrapper = styled(FlexContainer)`

`

const CustomerReviews = ({ reviews }) => {
  const currentIndex = useSelector(state => state.reviewSlider.currentIndex)
  const dispatch = useDispatch()

  const setVisibleReviews = reviews => {
    const lastIndex = reviews.length - 1
    const firstIndex = reviews[0]
    if(currentIndex === 0) {
      return [reviews[lastIndex], reviews[firstIndex], reviews[firstIndex+1]]
    }

    if(currentIndex === lastIndex) {
      return [reviews[lastIndex - 1], reviews[lastIndex], reviews[0]]
    }

    return reviews.slice(currentIndex - 1, currentIndex + 2)
  }

  const visibleReviews = setVisibleReviews(reviews)

  console.log(visibleReviews)
  const maxIndex = reviews.length - 1

  const handleLeftClick = () => {
    if (currentIndex > 0) {
      dispatch(decrementIndex());
    }
  }

  const handleRightClick = () => {
    if (currentIndex < maxIndex) {
      dispatch(incrementIndex());
    }
  }

  return (
    <Wrapper>
      {visibleReviews.map(review => {
        return <ReviewCard review={review} />
      })}
    </Wrapper>
  )
}

export default CustomerReviews
