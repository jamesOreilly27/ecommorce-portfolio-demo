import React from 'react'
import styled from 'styled-components'
import { MenuColumn } from '../Components'
import { FlexContainer } from './styled-components/layout'
import { FooterMenus } from './helpers'

const Wrapper = styled(FlexContainer)`
  width: 100vw;
  justify-content: flex-start;
`

const Footer = () => (
  <Wrapper>
    {FooterMenus.map(menu => {
      console.log('MENU: ', menu)
      return <MenuColumn key={menu.title} menu={menu} />
    })}
  </Wrapper>
)

export default Footer
