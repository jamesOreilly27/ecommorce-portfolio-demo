import React from 'react'
import styled from 'styled-components'
import { CartIcon } from '../Components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle'

const chooseLink = isLoggedIn => {
  if (isLoggedIn) return "/your-account"
  else return "/login"
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 19vw;
`

const Authlink = styled(Link)`
  text-decoration: none;
  font-family: 'Scope One', serif;
  max-height: 48px;
  max-width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const User = styled(FontAwesomeIcon)`
  color: #333333;
`


const UserHeaderSection = ({ user }) => (
  <Wrapper>
    <Authlink to={'/account'}>
      <User icon={faUserCircle} size="3x" />
    </Authlink>
    <CartIcon cart={user.cart} />
  </Wrapper>
)

export default UserHeaderSection
