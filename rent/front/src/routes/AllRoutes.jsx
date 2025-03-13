import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {
    Home,
    SeekerLogin,
    SeekerSignup,
    OwnerLogin,
    OwnerSignup
  } from '../pages'

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='' element={<Home />} />
        <Route path='seeker/login' element={<SeekerLogin />} />
        <Route path='seeker/signup' element={<SeekerSignup />} />
        <Route path='owner/login' element={<OwnerLogin />} />
        <Route path='owner/signup' element={<OwnerSignup />} />
    </Routes>
    </>
  )
}

export default AllRoutes