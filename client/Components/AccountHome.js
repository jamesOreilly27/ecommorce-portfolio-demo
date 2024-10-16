import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`

`

const AccontHome = ({ user }) => (
  <Wrapper>
    {`Welcome back ${user.first_name}`}
  </Wrapper>
)

export default AccontHome
