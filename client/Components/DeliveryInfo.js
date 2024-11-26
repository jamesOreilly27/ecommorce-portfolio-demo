import React, { useState } from 'react'
import styled from 'styled-components'
import { FlexContainer, FlexColContainer } from './styled-components/layout'
//import {  } from '../Components

const Wrapper = styled(FlexColContainer)`

`

const CurrentContainer = styled(FlexColContainer)`

`

const AddressLine = styled.div`
  font-size: 10px;
`

const DeliveryInfo = ({ user }) => {
  console.log('USER:', user)
  const { addresses, first_name, last_name } = user
  const currentAddress = addresses.filter(address => address.current)[0]
  console.log(currentAddress)
  return (
    <Wrapper>
      <CurrentContainer>
        <div>{`${first_name} ${last_name}`}</div>
        <div>{currentAddress.address}</div>
        <div>{`${currentAddress.town}, ${currentAddress.state} ${currentAddress.zip_code}`}</div>
      </CurrentContainer>
    </Wrapper>
  )
}

export default DeliveryInfo
