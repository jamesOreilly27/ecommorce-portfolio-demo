import React, { useState } from 'react'
import styled from 'styled-components'
import { FlexContainer, FlexColContainer } from './styled-components/layout'
//import {  } from '../Components

const Wrapper = styled(FlexContainer)`
  background-color: green;
  justify-content: flex-start;
  font-size: 17px;
`

const Address = ({ address }) => {
  return (
    <Wrapper>
      {
        `${address.address},
         ${address.town},
         ${address.state}
         ${address.zip_code}`
      }
    </Wrapper>
  )
}

export default Address
