
import { Routes, Route, NavLink } from 'react-router-dom'
import Home from './Home';
import About from './About';
import Contact from './Contact';
let App = ()=>{

    


    return(
        <>
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
                        <NavLink className="nav-link" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path='about' element={<About />}/>
                <Route path='contact' element={<Contact />}/>
            </Routes>


        </>
    )
}

export default App;

/*
    SPA ---- Single Page Application
*/