import React, { useState } from 'react'
import styled from 'styled-components'
import { FlexContainer, FlexColContainer } from './styled-components/layout'
//import {  } from '../Components

const Wrapper = styled(FlexContainer)`

`

const Checkbox = styled.input`

`

const CategoryCheckbox = ({ category, handleSelect }) => {
  
  const handleChange = () => {
    handleSelect(category.id)
  }

  return (
    <Wrapper>
      <Checkbox
        type="checkbox"
        onChange={handleChange}/>
      <div>{category.name}</div>
    </Wrapper>
  )
}

export default CategoryCheckbox
