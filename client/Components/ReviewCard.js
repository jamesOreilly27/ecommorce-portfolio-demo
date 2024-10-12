import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

`

const ReviewCard = ({ review }) => (
  <Wrapper>
    {review.comment}
  </Wrapper>
)

export default ReviewCard
