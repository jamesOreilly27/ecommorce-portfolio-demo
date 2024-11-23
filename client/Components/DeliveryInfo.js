import React, { useState } from 'react'
import styled from 'styled-components'
import { FlexContainer, FlexColContainer } from './styled-components/layout'
//import {  } from '../Components

const Wrapper = styled(FlexColContainer)`

`

const DeliveryInfo = ({ addresses }) => {
  console.log('addresses', addresses)
  return (
    <Wrapper>
      <div>
        Put a container here for user address info
      </div>
    </Wrapper>
  )
}

export default DeliveryInfo
