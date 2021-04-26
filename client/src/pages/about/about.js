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
                <p className="about-info">
                    We are a group of students all enrolled in the Coding Bootcamp program at Northwestern University in conjunction with Trilogy Education Services. This course specializes on Full Stack Web Development and for this application we have made use of a full MERN stack. This application is our final project and upon completion we will be certified Web Developers looking to jump into this growing industry. With a passion for technology and a love of internet applications we are each looking forward to our new future as web developers. Please check out our Github profiles below for more information on our projects.
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