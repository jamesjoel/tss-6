import React from 'react'
import {NavLink} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
const Header = () => {
  let cityArr = useSelector(state=>state.CityReducer);
  let empArr = useSelector(state=>state.EmpReducer);

  return (
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Redux ({cityArr.length})</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink className="nav-link" to="/">Home</NavLink>
            <NavLink className="nav-link" to="/feature">Features</NavLink>
            <NavLink className="nav-link" to="/student">Student</NavLink>
            <NavLink className="nav-link" to="/employee">Employee ({empArr.length})</NavLink>
            
          </Nav>
        </Container>
    </Navbar>
  )
}

export default Header