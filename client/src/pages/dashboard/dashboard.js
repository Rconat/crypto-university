import React, { useEffect, useState } from 'react'
import { useAuth } from '../../contexts/AuthContext'
import Ticker from '../../components/ticker/ticker'
import { Link } from 'react-router-dom'
import './dashboard.css'
import API from '../../utils/API'

const Dashboard = () => {
    const [dashboardModuleProgress, setDashboardModuleProgress] = useState([])
    const [syllabus, setSyllabus] = useState([])
    const [fullName, setFullName] = useState('')
    const { currentUser } = useAuth()

    // grabs the user id from localStorage and looks at the current progress the user has
    // also renders all modules in the syllabus
    useEffect(() => {
        Promise.all([
            API.syllabus(),
            localStorage.getItem('userId') ? API.getUserById(localStorage.getItem('userId')) : Promise.resolve(null)
        ]).then(([fetchSyllabus, fetchUser]) => {
            if (!!fetchUser) {
                const dashboardProgress = fetchUser.data.modules.reduce((acc, cur) => {
                    const findSyllabus = fetchSyllabus.data.find(item => item._id === cur.syllabus)
                    acc.push({ width: (cur.score / findSyllabus.questions.length) * 100, ...cur })
                    return acc;
                }, []);

                const syllabi = fetchSyllabus.data.reduce((acc, cur) => {
                    const findSyllabus = fetchUser.data.modules.find(item => item.syllabus === cur._id);
                    acc.push({ completed: syllabus.includes(cur._id), width: findSyllabus ? (findSyllabus.score / cur.questions.length) * 100 : 0, ...cur })
                    return acc;
                }, [])
                setDashboardModuleProgress(dashboardProgress);
                setSyllabus(syllabi)
                setFullName([fetchUser.data.firstName, fetchUser.data.lastName].filter(Boolean).join(' '))
            } else {
                const syllabi = fetchSyllabus.data.map(item => ({ ...item, completed: false }))
                setSyllabus(syllabi)
                console.log({ syllabi })
            }
        })
    }, [])
    console.log(currentUser)
    return (
        <>
            <Ticker />
            {dashboardModuleProgress.map(item => {
                return (
                    <div className="progress">
                        <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: `${item.width}%` }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                )
            })}
            <br />
            <div className="container dashboard-container">
                <h1 className="heading">DASHBOARD</h1>
                <br />
                <h2 className="welcome-user">Welcome {!!fullName ? fullName : currentUser.email}
                </h2>
                <br />
                <div className="container progress-container">
                    <h3 className="your-progress">Your Progress</h3>
                    <br />
                    <div className="row dashboard-row">
                        {syllabus.map(item => {
                            return (
                                <>
                                    <div className="col module-col">
                                        <Link to="/syllabus">
                                            <button className="module-btn" style={item.completed ? { background: 'green' } : {}}>{item.title}</button>
                                        </Link>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped bg-danger" role="progressbar" style={{ width: `${item.width}%` }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                    <br />
                </div>
            </div>
        </>
    )
}

export default Dashboard