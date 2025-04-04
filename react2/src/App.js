import React from 'react'
import Header from './components/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const App = () => {

  return (
    <>
        <Header />
        <div className="container">
        <Routes>
        
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          
        </Routes>
        </div>
    </>
  )
}

export default App