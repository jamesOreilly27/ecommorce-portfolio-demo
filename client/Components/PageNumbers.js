import React, { useState } from 'react'
import styled from 'styled-components'
import { FlexContainer, FlexColContainer } from './styled-components/layout'
//import {  } from '../Components

const Wrapper = styled(FlexContainer)`

`

const PageNumberButton = styled.button`

`

const PageNumbers = ({ numPages, activePage, incrementPage, decrementPage }) => {
  console.log('ACTIVE PAGE: ', activePage)
  console.log('NUM PAGES: ', numPages)
  return (
    <Wrapper>
      <PageNumberButton onClick={() => {
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
