import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
  let allEmp = useSelector(state=>state.EmpReducer);
  let allStu = useSelector(state=>state.StudentReducer);

  return (
    <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="collapsibleNavbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/student">Student ({allStu.length})</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/employee">Employee ({allEmp.length})</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header