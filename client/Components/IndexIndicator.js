import React from 'react'
import styled from 'styled-components'
import { FlexContainer } from './styled-components/layout'

const Wrapper = styled(FlexContainer)`
  align-items: center;
  background-color: #333333;
  height: 5vh;
  width: 20vw;
  border-radius: 20px;
`

const PaginationBubble = styled.div`
  ${({ active }) => {
    if(active) {
      return `
        background-color: white;
        height: 13px;
        width: 13px;
      `
    } else {
      return `
        background-color: grey;
        height: 10px;
        width: 10px;
      `
    }
  }}
  border-radius: 50%;
`

const IndexIndicator = ({ pages }) => (
  <Wrapper>
    {pages.map(page => {
      return <PaginationBubble key= {page.id} active={page.isActive} />
    })}
  </Wrapper>
)

export default IndexIndicator
