import React from 'react'
import {NavLink} from 'react-router-dom'

const Sidebar = () => {
  return (
    <>
    <div className="sidebar pe-4 pb-3">
            <nav className="navbar bg-secondary navbar-dark">
                <NavLink to="/" className="navbar-brand mx-4 mb-3">
                    <h3 className="text-primary"><i className="fa fa-user-edit me-2"></i>DarkPan</h3>
                </NavLink>
                <div className="d-flex align-items-center ms-4 mb-4">
                    <div className="position-relative">
                        <img className="rounded-circle" src="/assets/img/user.jpg" alt="" style={{width: "40px", height: "40px"}} />
                        <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                    </div>
                    <div className="ms-3">
                        <h6 className="mb-0">Jhon Doe</h6>
                        <span>Admin</span>
                    </div>
                </div>
                <div className="navbar-nav w-100">
                    <NavLink to="/" className="nav-item nav-link active"><i className="fa fa-tachometer-alt me-2"></i>Dashboard</NavLink>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-users me-2"></i>Faculty</a>
                        <div className="dropdown-menu bg-transparent border-0">
                            <NavLink to="/faculty/list" className="dropdown-item">List</NavLink>
                            <NavLink to="/faculty/add" className="dropdown-item">Add</NavLink>
                            
                            
                        </div>
                    </div>
                    {/* <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-laptop me-2"></i>Elements</a>
                        <div className="dropdown-menu bg-transparent border-0">
                            <a href="button.html" className="dropdown-item">Buttons</a>
                            <a href="typography.html" className="dropdown-item">Typography</a>
                            <a href="element.html" className="dropdown-item">Other Elements</a>
                        </div>
                    </div> */}
                    
                </div>
            </nav>
        </div>
    </>
  )
}

export default Sidebar