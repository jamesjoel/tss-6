import React from 'react'
import Header from './ui/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Quiz from './pages/Quiz'
import Answer from './pages/Answer'

const App = () => {
  return (
    <>
    <Header />
    <div className="container" style={{minHeight : "600px"}}>

    <Routes>
      <Route path='' element={<Home />} />
      <Route path='/quiz' element={<Quiz />} />
      <Route path='/answer' element={<Answer />} />
    </Routes>
    </div>
    </>
  )
}

export default App