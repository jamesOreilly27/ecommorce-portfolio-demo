import React, { useState } from 'react'
import styled from 'styled-components'
import { FlexContainer, FlexColContainer } from './styled-components/layout'
import { Address, AddressRadio } from '../Components'

const Wrapper = styled(FlexColContainer)`
  background-color: blue;
  width: 90%;
`

const MainContainer = styled(FlexContainer)`
    justify-content: space-between;
`

const CurrentContainer = styled(FlexColContainer)`
  background-color: pink;
  width: 50%;
`

const ChangeContainer = styled(FlexContainer)`
  justify-content: flex-end;
  width: 50%;
`

const DeliveryInfo = ({ user, refetchUser }) => {
  const { addresses, first_name, last_name } = user
  const currentAddress = addresses.filter(address => address.current)[0]
  const inactiveAddresses = addresses.filter(address => !address.current)

  const [displayAddresses, setDisplayAddresses] = useState(false)
  return (
    <Wrapper>
      <MainContainer>
        <CurrentContainer>
          <h2>{`Deliver To ${first_name} ${last_name}`}</h2>
          <Address address={currentAddress} />
        </CurrentContainer>
        <ChangeContainer onClick={() => {
          setDisplayAddresses(!displayAddresses)
        }}>
          change
        </ChangeContainer>
      </MainContainer>
      <div>
        {displayAddresses &&
          <AddressRadio
            user={user}
            addresses={addresses}
            refetchUser={refetchUser}
            handleClick={() => {
              setDisplayAddresses(!displayAddresses)
            }}
          />
        }
      </div>
    </Wrapper>
  )
}

export default DeliveryInfo
