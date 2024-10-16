import styled from 'styled-components'

export const Container = styled.div`
  padding: 0.4em;
  box-sizing: border-box;
`

export const FlexContainer = styled(Container)`
  display: flex;
  justify-content: space-evenly;
`
export const FlexColContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  font-size: 20px;
`