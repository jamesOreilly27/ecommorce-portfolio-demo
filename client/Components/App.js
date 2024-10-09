import React from 'react'
import { Header, Footer } from '../Components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <Footer />
    </Router>
  )
}

export default App
