import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch, useState } from 'react-redux'
import { incrementIndex, decrementIndex } from '../store/slices'
import { ReviewCard } from '../Components'
import { FlexContainer, FlexColContainer } from './styled-components/layout'

const Wrapper = styled(FlexColContainer)`

`

const ReviewSection = styled(FlexContainer)`
  position: relative;
  height: 60vh;
  background-color: #00356b;
  width: 100vw;
`

const CenterReview = styled.div`
  position: absolute;
  min-width: 37.5%;
  opacity: 1;
  z-index: 2;
  transform: translateX(0);
  border: 1px solid red;
`

const LeftReview = styled.div`
  position: absolute;
  min-width: 32%;
  opacity: 0.7;
  z-index: 1;
  transform: translateX(-80%);
  border: 1px solid red;
`

const RightReview = styled(LeftReview)`
  transform: translateX(80%);
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
      <ReviewSection>
        <LeftReview>
          <ReviewCard review={reviews[currentIndex - 1]} />
        </LeftReview>
        <CenterReview>
          <ReviewCard review={reviews[currentIndex]} />
        </CenterReview>
        <RightReview>
          <ReviewCard review={reviews[currentIndex + 1]} />
        </RightReview>
      </ReviewSection>
    </Wrapper>
  )
}

export default CustomerReviews
