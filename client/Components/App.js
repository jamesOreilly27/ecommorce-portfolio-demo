import React from 'react'
import { Header, Footer, HomePage, AccountHome, CategoryFullView, ProductDetailView, Checkout, ProductsView } from '../Components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useGetMeQuery, useTopReviewsQuery, useGetCategoriesQuery, useGetFeaturedProductsQuery } from '../store/slices'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

const App = () => {
  const { data: userData, isLoading: userFetchLoading, isError: userFetchError } = useGetMeQuery(1)
  const { data: reviewData, isLoading: reviewFetchLoading, isError: reviewFetchError } = useTopReviewsQuery()
  const { data: categoryData, isLoading: categoryFetchLoading, isError: categoryFetchError } = useGetCategoriesQuery()
  const { data: productData, isLoading: productFetchLoading, isError: productFetchError } = useGetFeaturedProductsQuery()

  if(userFetchLoading || reviewFetchLoading || productFetchLoading) {
    return ( <div> Loading... </div> )
  }
  
  if(userFetchError || reviewFetchLoading || productFetchLoading) {
    return ( <div> Error Fetching Data </div> )
  }
  return  (
    <Router>
      <Wrapper>
        <Header user={userData} categories={categoryData} />
        <Routes>
          <Route path="/" element={<HomePage reviews={reviewData} categories={categoryData} products={productData} />} />
          <Route path="/account" element={<AccountHome user={userData} />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/products" element={<ProductsView products={productData} />} />
          <Route path="/category/:id" element={<CategoryFullView />} />
          <Route path="/products/:id" element={<ProductDetailView />} />
        </Routes>
        <Footer />
      </Wrapper>
    </Router>
  )
}

export default App
