import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Student from './pages/Student'
import Header from './ui/Header'
import Footer from './ui/Footer'
import { useDispatch } from 'react-redux'
import {getAllEmp} from './redux/EmpSlice'
import Employee from './pages/Employee'

const App = () => {
  let dispatch = useDispatch();
  dispatch(getAllEmp());

  return (
    <>
    <Header />
    <div className="container" style={{minHeight : "600px"}}>
      <Routes>
      <Route path='' element={<Home />} />
      <Route path='student' element={<Student />} />
      <Route path='employee' element={<Employee />} />
    </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App


/*
.get
.post
.put
.delete




*/