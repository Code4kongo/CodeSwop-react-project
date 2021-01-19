import React from 'react'
import { Link } from 'react-router-dom' 

const  NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info mt-2">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">View all users</Link>
                        </li>
                        <li className="nav-item mx-3">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar