import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link to="/about" className="navbar-brand" href="#">Crypto University</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link active" aria-current="page" href="#">Welcome</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/prices" className="nav-link" href="#">Prices</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/dashboard" className="nav-link" href="#">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/syllabus" className="nav-link" href="#">Syllabus</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/investments" className="nav-link" href="#">Investments</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/prices" className="nav-link" href="#">Prices</Link>
                    </li>
                    <li>
                        <button>Logout</button>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
)

export default Nav