import React from 'react'
import styled from 'styled-components'
import { IconLink } from '../Components'
import { FlexColContainer, FlexContainer } from './styled-components/layout'
import { NoDecLink } from './styled-components/clickables'

const Wrapper = styled(FlexColContainer)`
  align-items: flex-start;
  width: 23vw;
`

const StackWrapper = styled(FlexColContainer)`
  align-items: flex-start;
  padding: 0;
`

const Header = styled(FlexContainer)`
  font-size: 20px;
  font-weight: bold;
  padding: 0;
`

const LinkContainer = styled(FlexColContainer)`
  padding-left: 0;
`

const IconContainer = styled(FlexContainer)`
  padding-left: 0;
`

const Link = styled(NoDecLink)`
  font-size: 13px;
  padding-bottom: 15px;
`

const MenuColumn = ({ menu }) => {
  if(menu.cards) {
    return (
      <Wrapper>
        <Header>
          {menu.title}
        </Header>
        {menu.links.map(link => (
          <IconLink icon={link.icon} user="" route={link.to}>
            {link.name}
          </IconLink>
        ))}
      </Wrapper>
    )
  } else {
      return (
        <Wrapper>
          <Header>
            {menu.title}
          </Header>
          <LinkContainer>
            {menu.links.map(link => {
              return <Link to={link.to}> {link.name} </Link>
            })}
          </LinkContainer>
          {menu.title2 &&
            <StackWrapper>
              <Header>
                {menu.title2}
              </Header>
              <LinkContainer>
                {menu.links2.map(link => {
                  return <Link to={link.to}> {link.name} </Link>
                })}
              </LinkContainer>
            </StackWrapper>
          }
          {menu.title3 &&
            <StackWrapper>
              <Header>
                {menu.title3}
              </Header>
              <IconContainer>
                {menu.links3.map(link => {
                  return (
                    <IconLink icon={link.icon} user="" route={link.to}>
                      {link.name}
                    </IconLink>
                  )
                })}
              </IconContainer>
            </StackWrapper>
          }
        </Wrapper>
  )}}

export default MenuColumn
