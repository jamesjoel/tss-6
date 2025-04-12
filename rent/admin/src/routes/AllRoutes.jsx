import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import OwnerList from '../pages/owner/List'
import OwnerAdd from '../pages/owner/Add'

import SeekerAdd from '../pages/seeker/Add'
import SeekerList from '../pages/seeker/List'
import Login from '../pages/Login'
import Logout from '../pages/Logout'
import ProtactedRoute from './ProtactedRoute'
import ViewProperty from '../pages/owner/ViewProperty'
const AllRoutes = () => {
  return (
    <>
    <Routes>

        <Route path='' element={<Login />} />

        <Route path='' element={<ProtactedRoute />}>

            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/view-property/:id' element={<ViewProperty />} />
            <Route path='/owners/list' element={<OwnerList />} />
            <Route path='/owners/add' element={<OwnerAdd />} />
            <Route path='/seeker/add' element={<SeekerAdd />} />
            <Route path='/seeker/list' element={<SeekerList />} />
            <Route path='/logout' element={<Logout />} />

        </Route>
    </Routes>
    </>
  )
}

export default AllRoutes