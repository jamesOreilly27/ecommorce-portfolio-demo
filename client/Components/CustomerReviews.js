import React from 'react'
import styled from 'styled-components'
import { FlexContainer } from './styled-components/layout'

const Wrapper = styled(FlexContainer)`
  
`

const CustomerReviews = ({ reviews }) => (
  <Wrapper>
    {reviews.map(review => {
      return ( <div> {review.comment} </div> )
    })}
  </Wrapper>
)

export default CustomerReviews
