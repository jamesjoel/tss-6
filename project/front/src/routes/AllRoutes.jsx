import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Signup from '../pages/Signup'
import FacultyLogin from '../pages/FacultyLogin'
const AllRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='faculty-login' element={<FacultyLogin />} />

    </Routes>
  )
}

export default AllRoutes