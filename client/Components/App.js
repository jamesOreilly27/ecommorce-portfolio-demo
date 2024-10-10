import React from 'react'
import { Header, Footer, HomePage } from '../Components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useGetMeQuery } from '../store/slices'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const App = () => {
  const { data, isLoading, isError } = useGetMeQuery(1)

  if(isLoading) {
    return ( <div> Loading... </div> )
  }
  
  if(isError) {
    return ( <div> Error Fetching Data </div> )
  }
  return  (
    <Router>
      <Wrapper>
        <Header user={data} />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer />
      </Wrapper>
    </Router>
  )
}

export default App
