import React from 'react'
import { useAuth } from '../../contexts/AuthContext'
import Ticker from '../../components/ticker/ticker'
import { Link } from 'react-router-dom'
import './dashboard.css'

const Dashboard = () => {

    const { currentUser } = useAuth()

    console.log(currentUser)
    return(
        <>
            <Ticker />
            <br />
            <div className="container dashboard-container">
                <h1 className="heading">DASHBOARD</h1>
                <br />
                <h2 className="welcome-user">Welcome {currentUser.email}
                </h2>
                <br />
                <div className="container progress-container">
                    <h3 className="your-progress">Your Progress</h3>
                    <br />
                    <div className="row dashboard-row">
                        <div className="col module-col">
                            <Link to="/syllabus">
                                <button className="module-btn">MODULE ONE</button>
                            </Link>
                        </div>
                        <div className="col module-col">
                            <Link to="/syllabus">
                                <button className="module-btn">MODULE TWO</button>
                            </Link>
                        </div>
                        <div className="col module-col">
                            <Link to="/syllabus">
                                <button className="module-btn">MODULE THREE</button>
                            </Link>
                        </div>
                        <div className="col module-col">
                            <Link to="/syllabus">
                                <button className="module-btn">MODULE FOUR</button>
                            </Link>
                        </div>
                        <div className="col module-col">
                            <Link to="/syllabus">
                                <button className="module-btn">MODULE FIVE</button>
                            </Link>
                        </div>
                        <div className="col module-col">
                            <Link to="/syllabus">
                                <button className="module-btn">MODULE SIX</button>
                            </Link>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        </>
    )
}

export default Dashboard