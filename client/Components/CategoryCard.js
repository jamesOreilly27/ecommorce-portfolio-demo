import React from 'react'
import styled from 'styled-components'
import { FlexColContainer, FlexContainer, Title } from './styled-components/layout'
import { Button, NoDecLink } from './styled-components/clickables'

const Wrapper = styled(FlexColContainer)`
  min-width: 32%;
  min-height: 57vh;
  align-items: center;
`

const Image = styled.img`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
  flex: 2;
`

const CardTitle = styled(Title)`
  flex: 0.8;
  display: flex;
  align-items: center;
`

const WrapperLink = styled(NoDecLink)`

`

const CategoryCard = ({ category, imgSource }) => {
  return (
    <Wrapper>
      <Image src={imgSource} />
      <CardTitle>
        {category.name}
      </CardTitle>
      <WrapperLink to={`/category/${category.id}`}>
        <Button width={57} height={35}>
          Shop Now
        </Button>
      </WrapperLink>
    </Wrapper>
  )
}

export default CategoryCard
