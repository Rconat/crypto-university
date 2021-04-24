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
//importing in styles
import "./syllabus.css"

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
        Promise.all([
            localStorage.getItem('userId') ? API.getUserById(localStorage.getItem('userId')) : Promise.resolve(null)
        ]).then(([fetchUser]) => {
            if (!!fetchUser) {
                setToggleEducated(fetchUser.data.educated)
                setFullName(fetchUser.data.firstName + fetchUser.data.lastName)
                console.log(fetchUser.data.firstName, fetchUser.data.lastName);
            }
        })
    }, [])

    
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
            {toggleEducated && (
                <>
                    <div style={{ position: "absolute", left: -2000 }}>
                        <Diploma ref={componentRef} />
                    </div>
                    <button onClick={() => {
                        setDiplomaVisable(true)
                        setTimeout(() => {
                            handlePrint()
                            setDiplomaVisable(false)
                        }, 500)
                    }
                    }>Print this out!</button>
                </>
            )}
        </>
    )
}

export default Syllabus

