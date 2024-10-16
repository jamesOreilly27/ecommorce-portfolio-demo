import React, { useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useGetProductByIdQuery } from '../store/slices'
import { FlexContainer, FlexColContainer } from './styled-components/layout'

const Wrapper = styled(FlexContainer)`

`

const ProductDetailView = ({  }) => {
  const params = useParams()
  const { data, isLoading, isError } = useGetProductByIdQuery(parseInt(params.id))

  if(isLoading) {
    return <div> Loading...</div>
  }

  if(isError) {
    return <div>Error fetching Data</div>
  }

  return (
    <Wrapper>
      {data.name}
    </Wrapper>
  )
}

export default ProductDetailView
