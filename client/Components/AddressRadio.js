import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { FlexContainer, FlexColContainer } from './styled-components/layout'
import { Address } from '../Components'
import { useUpdateCurrentAddressMutation } from '../store/slices'

const Wrapper = styled(FlexColContainer)`

`

const Container = styled(FlexContainer)`
  width: 40%;ç
  justify-content: space-around;
`

const AddressRadio = ({ user, addresses, refetchUser, handleClick }) => {
  const state = useSelector(state => state)
  console.log('STATE', state)
  const [changeDeliveryAddress, { isLoading, isSuccess, isError }] = useUpdateCurrentAddressMutation()

  useEffect(() => {
    if(isSuccess) {
      refetchUser()
    }
  }, [isSuccess, refetchUser])

  return (
    <Wrapper>
      {addresses.map(address=> {
        return (
          <Container key={address.id}>
            <input
              type="radio"
              id={address.id}
              name="address"
              value={address}
              checked={address.current}
              onChange={() => {
                changeDeliveryAddress({userId: user.id, addressId: address.id})
              }}
            />
            <label htmlFor={address.id}>
              <Address address={address} />
            </label>
          </Container>
        )
      })}
                  <button onClick={handleClick}>
              Use this address
            </button>
    </Wrapper>
  )
}

export default AddressRadio
