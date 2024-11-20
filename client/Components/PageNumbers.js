import React, { useState } from 'react'
import styled from 'styled-components'
import { FlexContainer, FlexColContainer } from './styled-components/layout'
//import {  } from '../Components

const Wrapper = styled(FlexContainer)`

`

const PageNumberButton = styled.button`

`

const PageNumbers = ({ numPages, activePage, incrementPage, decrementPage }) => {

  return (
    <Wrapper>
      <PageNumberButton onClick={() => {
        if(activePage > 1)
        decrementPage(activePage - 1)
      }}>
        First Page
      </PageNumberButton>
      <PageNumberButton onClick={() => {
        if(activePage > 1) {
          decrementPage()
        }
      }}>
        Previous
      </PageNumberButton>

      {activePage}

      <PageNumberButton onClick={() => {
        if(activePage < numPages) {
          incrementPage()
        }
      }}>
        Next
      </PageNumberButton>
      <PageNumberButton onClick={() => {
        incrementPage(numPages - activePage)
      }}>
        Last Page
      </PageNumberButton>
    </Wrapper>
  )
}

export default PageNumbers
