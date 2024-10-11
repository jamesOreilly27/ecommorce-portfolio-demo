import React from 'react'
import styled from 'styled-components'
import { FlexContainer } from './styled-components/layout'
import { NoDecLink } from './styled-components/clickables'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled(FlexContainer)`
  justify-content: center;
  align-items: center;
  position: relative;
`

const Link = styled(NoDecLink)`
  width: 100%
  height: 100%
`

const Icon = styled(FontAwesomeIcon)`
  max-height: 20px;
  max-width: 20px;
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

const IconLink = ({ icon, user, route, isCart }) => (
  <Wrapper>
    <Link to={route}>
      <Icon icon={icon} size="2x"/>
    </Link>
    {isCart&&
      <QuantityBubble>
        {user.cart['cart-items'].length}
      </QuantityBubble>
    }
  </Wrapper>
)

export default IconLink
