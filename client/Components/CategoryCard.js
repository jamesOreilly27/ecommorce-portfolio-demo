import React from 'react'
import styled from 'styled-components'
import { FlexColContainer, FlexContainer, Title } from './styled-components/layout'
import { Button } from './styled-components/clickables'

const Wrapper = styled(FlexColContainer)`
  min-width: 32%;
  min-height: 57vh;
  align-items: center;
`

const Image = styled(FlexContainer)`
  background-color: white;
  width: 100%;
  align-items: center;
  flex: 2;
`

const CardTitle = styled(Title)`
  flex: 0.8;
  display: flex;
  align-items: center;
`

const CategoryCard = ({ category }) => (
  <Wrapper>
    <Image>
      Image placeholder
    </Image>
    <CardTitle>
      {category.name}
    </CardTitle>
    <Button width={57} height={35} backgroundColor='#8DABD3'>
      shop now
    </Button>
  </Wrapper>
)

export default CategoryCard
