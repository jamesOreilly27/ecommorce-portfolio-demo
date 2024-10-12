import React from 'react'
import styled from 'styled-components'
import { FlexContainer } from './styled-components/layout'

const Wrapper = styled(FlexContainer)`
  justify-content: center;
  align-items: center;
  height: 55vh;
  background-color: white;
  width: 100%;
`

const ReviewCard = ({ review }) => (
  <Wrapper>
    {review.comment}
  </Wrapper>
)

export default ReviewCard
