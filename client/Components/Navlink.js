import React, { useState } from 'react'
import styled from 'styled-components'
import { DropdownMenu } from '../Components'
import { FlexColContainer, FlexContainer } from './styled-components/layout'
import { Link } from 'react-router-dom'

const Wrapper = styled(FlexColContainer)`
  padding: 5px;
  color: #333333;
  align-items: center;
  width: 10em;
`

const StyledLink = styled(Link)`
  text-decoration: none;
  font-family: 'Scope One', serif;
  color: inherit;
`

const Navlink = ({ item }) => {
  const [state, setState] = useState({ hovering: false })

  const handleMouseEnter = () => {
    setState({ hovering: true })
  }

  const handleMouseLeave = () => {
    setState({ hovering: false })
  }

  const willRenderDropdown = () => item.dropdownList && state.hovering

  return (
    <Wrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {console.log('TESTING: ', item.dropdownList)}
      <StyledLink to={item.linkTo}>
        {item.name}
      </StyledLink>
      <DropdownMenu menu={item.dropdownList} render={willRenderDropdown()}/>
    </Wrapper>
  )
}

export default Navlink
