import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const NoDecLink = styled(Link)`
  text-decoration: none;
  color: #333333;
`

export const Button = styled.button`
  width: ${({ width }) => `${width}%`};
  height: ${({ height }) => `${height}px`};
  background-color: #333333;
  color: #F8F8FF;
  border-radius: 4px;
  border: 1px solid #F8F8FF;
  outline: none;
  cursor: pointer;
`