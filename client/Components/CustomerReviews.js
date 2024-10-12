import React from 'react'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
import { incrementIndex, decrementIndex } from '../store/slices'
import { FlexContainer } from './styled-components/layout'

const Wrapper = styled(FlexContainer)`

`

const CustomerReviews = ({ reviews }) => {
  const currentIndex = useSelector(state => state.reviewSlider.currentIndex)
  const dispatch = useDispatch()

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
      {reviews.map(review => {
        return ( <div> {review.comment} </div> )
      })}
    </Wrapper>
  )
}

export default CustomerReviews
