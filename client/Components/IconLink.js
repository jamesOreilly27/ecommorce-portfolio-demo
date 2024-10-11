import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { FlexContainer } from './styled-components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Wrapper = styled(FlexContainer)`
  justify-content: center;
  align-items: center;
`

const StyledLink = styled(Link)`
  width: 100%
  height: 100%
`

const Icon = styled(FontAwesomeIcon)`
  max-height: 20px;
  max-width: 20px;
`

const IconLink = ({ icon, user }) => (
  <Wrapper>
    <StyledLink to="clicked">
      <Icon icon={icon} size="2x"/>
    </StyledLink>
  </Wrapper>
)

export default IconLink
