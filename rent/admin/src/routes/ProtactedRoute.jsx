import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
const ProtactedRoute = () => {
  return (
    <div className="wrapper">
      
      <Sidebar />
      <div className="main-panel">
        <Header />
        <Outlet />      
      </div>
    </div>
        
       
    
  )
}

export default ProtactedRoute