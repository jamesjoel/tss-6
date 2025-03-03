import React from 'react'
import {Routes, Route} from 'react-router-dom'

import { Home, About, Contact, Help } from '../pages'
import Demo1 from '../pages/Demo1'
import Demo2 from '../pages/Demo2'
import Demo3 from '../pages/Demo3'
import Demo4 from '../pages/Demo4'
import Demo5 from '../pages/Demo5'
import Demo6 from '../pages/Demo6'
import Demo7 from '../pages/Demo7'
import Demo8 from '../pages/Demo8'
import Demo9 from '../pages/Demo9'



const AllRoutes = () => {
  return (
    <Routes>
        <Route path='' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='help' element={<Help />} />
        <Route path='demo1' element={<Demo1 />} />
        <Route path='demo2' element={<Demo2 />} />
        <Route path='demo3' element={<Demo3 />} />
        <Route path='demo4' element={<Demo4 />} />
        <Route path='demo5' element={<Demo5 />} />
        <Route path='demo6' element={<Demo6 />} />
        <Route path='demo7' element={<Demo7 />} />
        <Route path='demo8' element={<Demo8 />} />
        <Route path='demo9' element={<Demo9 />} />
    </Routes>
  )
}

export default AllRoutes
/*
    full_name

    fullName

    FullName

*/