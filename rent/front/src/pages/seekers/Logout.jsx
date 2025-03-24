import React from 'react'
import { Navigate } from 'react-router-dom'

const Logout = () => {
    localStorage.removeItem("access-token")
    localStorage.removeItem("name")
    
  return (
    <Navigate to="/seeker/login" />
  )
}

export default Logout
/*

let Demo = ()=>{

    return()
}



*/