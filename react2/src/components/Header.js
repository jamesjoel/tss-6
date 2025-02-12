import React from 'react'
import {NavLink} from 'react-router-dom'

const Header = () => {
  return (
    <nav className='navbar navbar-expand-sm bg-dark navbar-dark'>
            <div className="container">
                <NavLink to='/' className='navbar-brand'>
                    The Stepping Stone
                </NavLink>
                <button className='navbar-toggler' data-bs-toggle="collapse" data-bs-target="#menu">
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div id='menu' className='collapse navbar-collapse'>
                    <ul className='nav navbar-nav'>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/'>Home</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/about'>About</NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink className='nav-link' to='/contact'>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
  )
}

export default Header