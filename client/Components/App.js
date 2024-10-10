import React from 'react'
import { Header, Footer, HomePage } from '../Components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const App = () => (
  <Router>
    <Wrapper>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Footer />
    </Wrapper>
  </Router>
)

export default App
