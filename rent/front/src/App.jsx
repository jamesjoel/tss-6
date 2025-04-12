import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Slider from './components/Slider'
import AllRoutes from './routes/AllRoutes'
import HeaderNew from './components/HeaderNew'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
        {/* <Header /> */}
        <HeaderNew />
        {/* <Slider /> */}
        <AllRoutes />
        <Footer />
    </>
  )
}

export default App