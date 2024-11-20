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
  ${({ selected }) => selected ? "background-color: pink" : "background-color: green"}
`

const SelectorContainer = ({ options, handleClick, selected }) => {

  const checkIsSelected = (option, selected) => {
    if(parseInt(option[0])) {
      return parseInt(option[0]) === selected
    } else {
      return selected === option
    }
  }
  return (
    <Wrapper>
      {options.map(option => {
        return (
          <OptionContainer
            selected={checkIsSelected(option, selected)}
            onClick={() => {
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
