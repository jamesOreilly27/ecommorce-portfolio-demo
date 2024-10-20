import React, { useState } from 'react'
import styled from 'styled-components'
import { FlexContainer, FlexColContainer } from './styled-components/layout'
//import {  } from '../Components

const Wrapper = styled(FlexContainer)`
  height: 20%;
  width: 100%;
  background-color: white;
  margin: 10px 0;
  align-items: center;
`

const OptionContainer = styled(FlexContainer)`
  align-items: center;
  width: 35%;
  height: 100%;
  border-right: 1px solid red;
`

const SelectorContainer = ({ options, handleClick }) => {

  return (
    <Wrapper>
      {options.map(option => {
        return (
          <OptionContainer onClick={() => {
            handleClick(option)
          }}>
            {option}
          </OptionContainer>
        )
      })}
    </Wrapper>
  )
}

export default SelectorContainer
