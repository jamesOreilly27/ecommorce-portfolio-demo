import React, { useState } from 'react'
import styled from 'styled-components'
import { FlexContainer, FlexColContainer } from './styled-components/layout'
import { FilterMenuType } from '../Components'

const Wrapper = styled(FlexColContainer)`

`

const MiscTypes = ({ menu, handleSelect }) => {
  return (
    <Wrapper>
      <FilterMenuType menu={menu} handleSelect={handleSelect} />
    </Wrapper>
  )
}

export default MiscTypes