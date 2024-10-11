import React from 'react'
import styled from 'styled-components'
import { FlexColContainer, FlexContainer } from './styled-components/layout'
import { NoDecLink } from './styled-components/clickables'

const Wrapper = styled(FlexColContainer)`
  align-items: flex-start;
`

const Header = styled(FlexContainer)`
  font-size: 17px;
  font-weight: bold;
`

const LinkContainer = styled(FlexColContainer)`

`

const Link = styled(NoDecLink)`
  font-size: 13px;
`

const MenuColumn = ({ menu }) => (
  <Wrapper>
    <Header>
      {menu.title}
    </Header>
    <LinkContainer>
      {menu.links.map(link => {
        return <Link to={link.to}> {link.name} </Link>
      })}
    </LinkContainer>
  </Wrapper>
)

export default MenuColumn
