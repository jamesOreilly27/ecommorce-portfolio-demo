import React from 'react'
import { Header, Footer, HomePage, AccountHome } from '../Components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useGetMeQuery, useTopReviewsQuery } from '../store/slices'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const App = () => {
  const { data: userData, isLoading: userFetchLoading, isError: userFetchError } = useGetMeQuery(1)
  const { data: reviewData, isLoading: reviewFetchLoading, isError: reviewFetchError } = useTopReviewsQuery()

  if(userFetchLoading || reviewFetchLoading) {
    return ( <div> Loading... </div> )
  }
  
  if(userFetchError || reviewFetchLoading) {
    return ( <div> Error Fetching Data </div> )
  }
  return  (
    <Router>
      <Wrapper>
        <Header user={userData} />
        <Routes>
          <Route path="/" element={<HomePage reviews={reviewData}/>} />
          <Route path="/account" element={<AccountHome user={userData} />} />
        </Routes>
        <Footer />
      </Wrapper>
    </Router>
  )
}

export default App
