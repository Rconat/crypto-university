import React, { useEffect, useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print'
import { useHistory } from 'react-router-dom'
// importing diploma component
import Diploma from '../../components/diploma'
import API from '../../utils/API';
// importing Modules
import Overview from "../../components/overview"
import ModuleOne from "../../components/moduleOne"
import ModuleTwo from "../../components/moduleTwo"
import ModuleThree from "../../components/moduleThree"
import ModuleFour from "../../components/moduleFour"
import ModuleFive from "../../components/moduleFive"
import styled from "styled-components"
//importing in styles
import "./syllabus.css"

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

const Syllabus = () => {
    const history = useHistory(); // window.history
    const [toggleEducated, setToggleEducated] = useState(false)
    const [fullName, setFullName] = useState('')
    // react-to-print
    const componentRef = useRef()
    const [diplomaVisable, setDiplomaVisable] = useState(false)
    const [syllabi, setSyllabi] = useState([]);
    const [currentModule, setCurrentModule] = useState("syllabus");
    const [quizId, setQuizId] = useState("syllabus");
    
    // checks localStorage for user id and grabs the id if available
    // then returns the data of the current user
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

        console.log(syllabi)
    
    // fetch all modules in syllabus
    useEffect(() => {
        let mounted = true;
        API.syllabus().then(response => {
            if (mounted) {
                setSyllabi(response.data)
            }
        })
        return () => {
            mounted = false;
        }
    }, [])

    // returns react component based on current module
    const CurrentComponent = {
        "syllabus": () => <Overview switchCurrentModule={switchCurrentModule} />,
        "ModuleOne": (quizId) => <ModuleOne switchCurrentModule={switchCurrentModule} quizRedirect={() => history.push(`/quiz/${quizId}`)} prev={(e) => switchCurrentModule(e, 'syllabus')} next={(e) => switchCurrentModule(e, 'ModuleTwo')} />,
        "ModuleTwo": (quizId) => <ModuleTwo switchCurrentModule={switchCurrentModule} quizRedirect={() => history.push(`/quiz/${quizId}`)} prev={(e) => switchCurrentModule(e, 'ModuleOne')} next={(e) => switchCurrentModule(e, 'ModuleThree')} />,
        "ModuleThree": (quizId) => <ModuleThree switchCurrentModule={switchCurrentModule} quizRedirect={() => history.push(`/quiz/${quizId}`)} prev={(e) => switchCurrentModule(e, 'ModuleTwo')} next={(e) => switchCurrentModule(e, 'ModuleFour')} />,
        "ModuleFour": (quizId) => <ModuleFour switchCurrentModule={switchCurrentModule} quizRedirect={() => history.push(`/quiz/${quizId}`)} prev={(e) => switchCurrentModule(e, 'ModuleThree')} next={(e) => switchCurrentModule(e, 'ModuleFive')} />,
        "ModuleFive": (quizId) => <ModuleFive switchCurrentModule={switchCurrentModule} quizRedirect={() => history.push(`/quiz/${quizId}`)} prev={(e) => switchCurrentModule(e, 'ModuleFour')} next={(e) => switchCurrentModule(e, 'syllabus')} />,
    }
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });
    const switchCurrentModule = (e, targetModule) => {
        console.log(targetModule)
        setCurrentModule(targetModule)
        if (targetModule !== 'syllabus') {
            const syllabus = syllabi.find(item => item.title === targetModule);
            setQuizId(syllabus._id)
        }
        window.scrollTo(0, 100)
    }

    return (
        <>
            <br />
            <div id="top" style={{ display: 'flex', justifyContent: 'flex-start' }}>
                {CurrentComponent[currentModule](quizId)}
            </div>
            <br/>
            {toggleEducated && (
                <>
                    <div style={{ position: "absolute", left: -2000 }}>
                        <Diploma ref={componentRef} fullName={fullName} />
                    </div>
                    <h3 style={{color:"black"}}>Print out your diploma!</h3>
                    <CustomButton onClick={() => {
                        setDiplomaVisable(true)
                        setTimeout(() => {
                            handlePrint()
                            setDiplomaVisable(false)
                        }, 500)
                    }
                    }>Print</CustomButton>
                </>
            )}
            <br/>
        </>
    )
}

export default Syllabus

