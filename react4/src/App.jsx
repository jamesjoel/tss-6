import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Demo from './pages/Demo'

const App = () => {
  return (
    <>
    <Header />
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/demo' element={<Demo />} />
    </Routes>
    </>
  )
}

export default App