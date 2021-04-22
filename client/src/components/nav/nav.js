import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import CULogo from '../../assets/logos/cu_logo_72x72.png'
import './nav.css'

const Nav = () => {

    const [error, setError] = useState('')
    const { logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
        setError('')

        try {
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to log out')
        }

    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/about" className="navbar-brand
                cu-about hvr-grow" href="#">
                    <img src={CULogo} alt="Crypto University"></img>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" href="#">Dashboard</Link>
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
                        <li className="nav-item">
                            <Link to="/account" className="nav-link" href="#">My Account</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className="logout-btn btn" variant="link" onClick={handleLogout}>Log Out</button>
                    {error && <alert className="alert alert-danger" role="alert">{error}</alert>}
                </div>
            </div>
        </nav>
    )
}

export default Nav