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
import MyProfile from '../pages/seekers/MyProfile'
import SeekerProtactedRoutes from './SeekerProtactedRoutes'
import MyAccount from '../pages/owner/MyAccount'
import OwerProtactedRoutes from './OwerProtactedRoutes'
import AddNew from '../pages/owner/AddNew'
import MyProperty from '../pages/owner/MyProperty'
import About from '../pages/About'
import Contact from '../pages/Contact'

const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='details/:id' element={<Details />} />
        <Route path='seeker/login' element={<SeekerLogin />} />
        <Route path='' element={<SeekerProtactedRoutes />}>

          <Route path='seeker/my-profile' element={<MyProfile />} />
          <Route path='seeker/logout' element={<SeekerLogout />} />
        
        </Route>
        <Route path='seeker/signup' element={<SeekerSignup />} />
        <Route path='owner/login' element={<OwnerLogin />} />
        <Route path='owner/signup' element={<OwnerSignup />} />

        <Route path='' element={<OwerProtactedRoutes />}>

            <Route path='owner/my-property' element={<MyProperty />} />
            <Route path='owner/add-new-property' element={<AddNew />} />
            <Route path='owner/my-account' element={<MyAccount />} />
            <Route path='owner/logout' element={<OwnerLogout />} />
        </Route>

    </Routes>
    
    </>
  )
}

export default AllRoutes