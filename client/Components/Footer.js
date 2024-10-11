import React from 'react'
import styled from 'styled-components'
import { MenuColumn } from '../Components'
import { FlexContainer } from './styled-components/layout'
import { FooterMenus } from './helpers'

const Wrapper = styled(FlexContainer)`
  width: 100vw;
`

const Footer = () => (
  <Wrapper>
    {FooterMenus.map(menu => {
      return <MenuColumn key={menu.title} menu={menu} />
    })}
  </Wrapper>
)

export default Footer
