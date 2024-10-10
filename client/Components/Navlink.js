import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  border-radius: .3em;
  height: 90%;
  width: 25%;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #333333;
  &:hover {
    background-color: #8D693A;
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