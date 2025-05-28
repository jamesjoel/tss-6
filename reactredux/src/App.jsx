import React from 'react'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Feature from './pages/Feature'
import Student from './pages/Student'
import Employee from './pages/Employee'


const App = () => {
  return (
    <>
    <Header />
    <Routes>
      <Route path='' element={<Home />} />
      <Route path='feature' element={<Feature />} />
      <Route path='student' element={<Student />} />
      <Route path='employee' element={<Employee />} />
    </Routes>
      
    </>
  )
}

export default App

/*
whenever (compoent) you want to get data from the store

  1. import {useSelector} from 'react-redux'
  
  2. let variable = useSelector(state=>state)

*/