import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container">
                <NavLink className="navbar-brand" to="/">The Stepping Stone</NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav me-auto">
                        {/* <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/help">Help</NavLink>
                        </li> */}
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/demo1">Demo1</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/demo2">Demo2</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/demo3">Demo3</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/demo4">Demo4</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/demo5">Demo5</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/demo6">Demo6</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/demo7">Demo7</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/demo8">Demo8</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/demo9">Demo9</NavLink>
                        </li>
                        
                    </ul>
                <div className='d-flex'>
                    <button className='mx-1 btn btn-sm btn-info'>Login</button>
                    <button className='mx-1 btn btn-sm btn-info'>Signup</button>
                </div>
            </div>
        </div>
        </nav>
  )
}

export default Header