import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons/faUserCircle'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons/faShoppingCart'

const chooseLink = isLoggedIn => {
  if (isLoggedIn) return "/your-account"
  else return "/login"
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 15vw;
  margin-left: 25vw;
`

const Authlink = styled(Link)`
  text-decoration: none;
  font-family: 'Scope One', serif;
  font-size: 13px;
`

const Cart = styled(FontAwesomeIcon)`
  color: #333333;
`

const User = styled(FontAwesomeIcon)`
  color: #333333;
`


const UserHeaderSection = () => (
  <Wrapper>
    <Authlink to={'/login'}>
      <User icon={faUserCircle} size="2x" />
    </Authlink>
    <Link to="/your-account/orders">
      <Cart icon={faShoppingCart} size="2x" />
    </Link>
  </Wrapper>
)

export default UserHeaderSection
