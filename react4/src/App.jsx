import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Demo from './pages/Demo'
import Photos from './pages/Photos'

const App = () => {
  return (
    <>
    <Header />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/demo' element={<Demo />} />
        <Route path='/photos' element={<Photos />} />
    </Routes>
    </>
  )
}

export default App