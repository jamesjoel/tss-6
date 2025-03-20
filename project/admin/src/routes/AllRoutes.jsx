import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Add from '../pages/Faculty/Add'
import List from '../pages/Faculty/List'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<Dashboard />} />
        <Route path='faculty/add' element={<Add />} />
        <Route path='faculty/list' element={<List />} />
    </Routes>
  )
}

export default AllRoutes