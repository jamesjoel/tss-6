import React from 'react'
import Header from './components/Header'
import Intro from './components/Intro'

import Footer from './components/Footer'
import AllRoutes from './routes/AllRoutes'
const App = () => {
  return (
    <>
    <Header />
    <Intro />
        <AllRoutes />
    <Footer />

    </>
  )
}

export default App