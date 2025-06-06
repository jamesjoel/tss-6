import React from 'react'
import Header from './ui/Header'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Chat from './pages/Chat'
const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='/chat/:id' element={<Chat />} />
    </Routes>
    </>
  )
}

export default App