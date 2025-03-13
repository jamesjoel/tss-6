import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Slider from './components/Slider'
import AllRoutes from './routes/AllRoutes'

const App = () => {
  return (
    <>
        <Header />
        <Slider />
        <AllRoutes />
        <Footer />
    </>
  )
}

export default App