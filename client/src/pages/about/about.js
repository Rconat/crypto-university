import React from 'react'
import Ticker from '../../components/ticker/ticker'
// import { Route } from 'react-router-dom'
import './about.css'

const About = () => {
    return (
        <>
            <Ticker />
            <br />
            <div className="container about-container">
                <h1 className="about-heading">About Us</h1>
                <br />
                <p className="about-info">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <div className="container profile-container">
                    <div className="david"></div>
                    <a target="blank" href="https://github.com/DavidESotomayor">
                        <button className="profile-btn">David Sotomayor</button>
                    </a>
                    <br />
                    <div className="ryan"></div>
                    <a target="blank" href="https://github.com/Rconat">
                        <button className="profile-btn">Ryan Conat</button>
                    </a>
                    <br />
                    <div className="nader"></div>
                    <a target="blank" href="https://github.com/n1flight">
                        <button className="profile-btn">Nader Salem</button>
                    </a>
                    <br />
                    <div className="matt">
                        <a target="blank" href="https://github.com/matthayden09">
                            <button className="profile-btn">Matt Hayden</button>
                        </a>
                    </div>
                    <br />
                </div>
            </div>
        </>
    )
}

export default About