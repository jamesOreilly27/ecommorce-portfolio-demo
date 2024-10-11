import React from 'react'
import styled from 'styled-components'
import { FlexColContainer } from './styled-components/layout'
import { Link } from 'react-router-dom'

const Container = styled(FlexColContainer)`
  padding: 5px;
  color: #333333;
  &:hover {
    color: #FFFAFA;
    transition: all .7s;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: 'Scope One', serif;
  color: inherit;
`

const Navlink = ({ item }) => (
  <Container>
    <StyledLink to={item.linkTo}>
      {item.name}
    </StyledLink>
  </Container>
)

export default Navlink
