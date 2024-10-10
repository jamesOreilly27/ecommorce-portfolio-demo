import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 80vh;
  width: 100vw;
`

const Image = styled.img`
  height: 100%;
  width: 100%;
`

const Banner = () => (
  <Wrapper>
    <Image src="/images/banner.jpeg" />
  </Wrapper>
)

export default Banner
