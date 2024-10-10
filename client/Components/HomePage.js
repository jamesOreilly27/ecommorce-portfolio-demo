import React from 'react'
import styled from 'styled-components'
import { ProductList, Banner } from '../Components'

const Wrapper = styled.div`

`

const Homepage = () => (
  <Wrapper>
    <Banner />
    <ProductList />
  </Wrapper>
)

export default Homepage
