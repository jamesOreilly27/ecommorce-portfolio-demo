import React, { useState } from 'react'
import styled from 'styled-components'
import { FlexContainer, FlexColContainer } from './styled-components/layout'
import { NoDecLink } from './styled-components/clickables'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled(FlexColContainer)`
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0.2em;
`

const Link = styled(NoDecLink)`
  width: 100%;
  height: 100%
`

const Icon = styled(FontAwesomeIcon)`
  padding: 0;
`

const QuantityBubble = styled(FlexContainer)`
  position: absolute;
  justify-content: center;
  align-items: center;
  background-color: #F8F8F8;
  border-radius: 50%;
  height: 18px;
  width: 18px;
  top: 0.4em;
  right: -0.3em;
`

const CartItemsContainer = styled(FlexColContainer)`
  align-items: center;
`

const IconLink = ({ icon, user, route, size, isCart, displayCart, setDisplayCart }) => {
  
  const handleClick = () => {
    setDisplayCart(!displayCart)
  }

  return (
    <Wrapper onClick={handleClick}>
      <Link to={route}>
        <Icon icon={icon} size={size} />
      </Link>
      {isCart&&
        <QuantityBubble>
          {user.cart['cart-items'].length}
        </QuantityBubble>
      }
    </Wrapper>
  )
}

export default IconLink
