import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

`

const CustomerReviews = ({ reviews }) => (
  <Wrapper>
    {reviews.map(review => {
      return ( <div> {review.comment} </div> )
    })}
  </Wrapper>
)

export default CustomerReviews
