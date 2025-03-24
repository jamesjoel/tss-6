import React from 'react'
import {Routes, Route} from 'react-router-dom'
import {
    Home,
    SeekerLogin,
    SeekerSignup,
    OwnerLogin,
    OwnerSignup,
    Details,
    SeekerLogout,
    OwnerLogout
  } from '../pages'

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='' element={<Home />} />
        <Route path='details' element={<Details />} />
        <Route path='seeker/login' element={<SeekerLogin />} />
        <Route path='seeker/logout' element={<SeekerLogout />} />
        <Route path='seeker/signup' element={<SeekerSignup />} />
        <Route path='owner/login' element={<OwnerLogin />} />
        <Route path='owner/signup' element={<OwnerSignup />} />
        <Route path='owner/logout' element={<OwnerLogout />} />
    </Routes>
    </>
  )
}

export default AllRoutes