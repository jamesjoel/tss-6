import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <header id="header">
    <div className="container">

      <div id="logo" className="pull-left">
        
        
        <NavLink to="/" className="scrollto"><img src="/assets/img/logo.png" alt="" title="" /></NavLink>
      </div>

      <nav id="nav-menu-container">
        <ul className="nav-menu">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Signup</NavLink>
          </li>
          <li>
            <NavLink to="/faculty-login">Faculty Login</NavLink>
          </li>
          
          
          
        </ul>
      </nav>
    </div>
    </header>
  )
}

export default Header