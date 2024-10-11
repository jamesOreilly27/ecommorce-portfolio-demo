import React from 'react'
import styled from 'styled-components'
import { Banner, Categories } from '../Components'

const Wrapper = styled.div`

`

const Homepage = () => (
  <Wrapper>
    <Banner />
    <Categories featured />
  </Wrapper>
)

export default Homepage
