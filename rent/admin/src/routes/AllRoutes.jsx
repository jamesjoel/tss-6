import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import OwnerList from '../pages/owner/List'
import OwnerAdd from '../pages/owner/Add'

import SeekerAdd from '../pages/seeker/Add'
import SeekerList from '../pages/seeker/List'
const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route path='' element={<Dashboard />} />
        <Route path='/owners/list' element={<OwnerList />} />
        <Route path='/owners/add' element={<OwnerAdd />} />
        <Route path='/seeker/add' element={<SeekerAdd />} />
        <Route path='/seeker/list' element={<SeekerList />} />

    </Routes>
    </>
  )
}

export default AllRoutes