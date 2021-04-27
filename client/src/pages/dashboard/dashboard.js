import React, { useEffect, useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print'
import { useAuth } from '../../contexts/AuthContext'
import Ticker from '../../components/ticker/ticker'
import DashboardModal from '../../components/modal/dashboardModal'
import { Link } from 'react-router-dom'
import API from '../../utils/API'
import './dashboard.css'
import Diploma from '../../components/diploma'
import styled from "styled-components"

const Dashboard = () => {
    const [toggleEducated, setToggleEducated] = useState(false)
    const componentRef = useRef()
    const [diplomaVisable, setDiplomaVisable] = useState(false)
    const [dashboardModuleProgress, setDashboardModuleProgress] = useState([])
    const [syllabus, setSyllabus] = useState([])
    const [fullName, setFullName] = useState('')
    const { currentUser } = useAuth()
    const history = useHistory()

    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const CustomButton = styled.button`
    display: flex;
    justify-content: center;
    margin: auto;
    color: black;
    background-color: #b8de6f;
    font-family: 'Quicksand', sans-serif;
    width: 200px;

    &:hover{background-color: #f1e189;}
    `

    useEffect(() => {
        API.checkUserEducation(localStorage.getItem('userId')).then(() => {
            return API.getUserById(localStorage.getItem('userId'))
        }).then((fetchUser) => {
            if (!!fetchUser) {
                setToggleEducated(fetchUser.data?.educated || false)
                setFullName([fetchUser.data?.firstName, fetchUser.data?.lastName].filter(Boolean).join(' '))
                console.log(fetchUser.data?.firstName, fetchUser.data?.lastName);
            }
        })
    }, [])

    // grabs the user id from localStorage and looks at the current progress the user has
    // also renders all modules in the syllabus
    useEffect(() => {
        Promise.all([
            API.syllabus(),
            localStorage.getItem('userId') ? API.getUserById(localStorage.getItem('userId')) : Promise.resolve(null)
        ]).then(([fetchSyllabus, fetchUser]) => {
            if (!!fetchUser) {
                const dashboardProgress = fetchUser.data?.modules.reduce((acc, cur) => {
                    const findSyllabus = fetchSyllabus.data.find(item => item._id === cur.syllabus)
                    acc.push({ width: (cur.score / findSyllabus.questions.length) * 100, ...cur })
                    return acc;
                }, []);

                const syllabi = fetchSyllabus.data.reduce((acc, cur) => {
                    const findSyllabus = fetchUser.data?.modules.find(item => item.syllabus === cur._id);
                    acc.push({ completed: syllabus.includes(cur._id), width: findSyllabus ? (findSyllabus.score / cur.questions.length) * 100 : 0, ...cur })
                    return acc;
                }, [])
                setDashboardModuleProgress(dashboardProgress || []);
                setSyllabus(syllabi)
                setFullName([fetchUser.data?.firstName, fetchUser.data?.lastName].filter(Boolean).join(' '))
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
            <br />
            <div className="container dashboard-container">
                <h1 className="heading">DASHBOARD</h1>
                <br />
                <h2 className="welcome-user">Welcome {!!fullName ? fullName : currentUser.email}
                </h2>
                <DashboardModal />
                <br />
                <div className="container progress-container">
                    <h3 className="your-progress">Your Progress</h3>
                    <div className="col dashboard-row">
                        {syllabus.map(item => {
                            return (
                                <div className="col module-col"> 
                                    <div className="progress progressBarCustomStyling">
                                        <div className="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: `${item.width}%` }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <button 
                                        className="module-btn" 
                                        style={item.completed ? { background: 'green' } : {}}
                                        onClick={(event) => {
                                            event.preventDefault()
                                            history.push(`/quiz/${item._id}`)
                                        }}
                                    >
                                        {item.title}
                                    </button>
                                </div>
                            )
                        })}
                    </div>
                    <br />
                </div>
            </div>

            {toggleEducated && (
                <>
                    <div style={{ position: "absolute", left: -2000 }}>
                        <Diploma ref={componentRef} fullName={fullName} />
                    </div>
                    <h2 style={{
                        fontFamily:"Quicksand, sans-serif",
                        fontWeight:"bold",
                        paddingTop:"30px",
                        color:"black",
                        display:"flex",
                        justifyContent:"center",
                        margin:"auto"
                    }}>Congratulations on passing all modules!</h2>
                    <h3 style={{
                        color:"black",
                        paddingBottom:"20px"
                    }}>You can now print your diploma</h3>
                    <CustomButton onClick={() => {
                        setDiplomaVisable(true)
                        setTimeout(() => {
                            handlePrint()
                            setDiplomaVisable(false)
                        }, 500)
                    }
                    }>Print it out!</CustomButton>
                </>
            )}

            <br/>
        </>
    )
}

export default Dashboard