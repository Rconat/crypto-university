import React, { useEffect, useRef, useState } from 'react'
import { useReactToPrint } from 'react-to-print'
import { useHistory } from 'react-router-dom'
// importing diploma component
import Diploma from '../../components/diploma'
import Api from '../../utils/API';
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
    const CurrentComponent = {
        "syllabus": () => <Overview switchCurrentModule={switchCurrentModule} />,
        "ModuleOne": () => <ModuleOne switchCurrentModule={switchCurrentModule} prev={(e) => switchCurrentModule(e, 'syllabus')} next={(e) => switchCurrentModule(e, 'ModuleTwo')}/>,
        "ModuleTwo": () => <ModuleTwo switchCurrentModule={switchCurrentModule} prev={(e) => switchCurrentModule(e, 'ModuleOne')} next={(e) => switchCurrentModule(e, 'ModuleThree')}/>,
        "ModuleThree": () => <ModuleThree switchCurrentModule={switchCurrentModule} prev={(e) => switchCurrentModule(e, 'ModuleTwo')} next={(e) => switchCurrentModule(e, 'ModuleFour')}/>,
        "ModuleFour": () => <ModuleFour switchCurrentModule={switchCurrentModule} prev={(e) => switchCurrentModule(e, 'ModuleThree')} next={(e) => switchCurrentModule(e, 'ModuleFive')}/>,
        "ModuleFive": () => <ModuleFive switchCurrentModule={switchCurrentModule} prev={(e) => switchCurrentModule(e, 'ModuleFour')} next={(e) => switchCurrentModule(e, 'syllabus')}/>,
    }

    // react-to-print
    const componentRef = useRef()
    const handlePrint = useReactToPrint({
        content: () => componentRef.current,
    });

    const [diplomaVisable, setDiplomaVisable] = useState(false)

    const history = useHistory(); // window.history
    const [syllabi, setSyllabi] = useState([]);
    const [currentModule, setCurrentModule] = useState("syllabus");

    const switchCurrentModule = (e, targetModule) => {
        setCurrentModule(targetModule)
        window.scrollTo(0, 100)
    }

    useEffect(() => {
        let mounted = true;
        Api.syllabus().then(response => {
            if (mounted) {
                setSyllabi(response.data)
            }
        })
        return () => {
            mounted = false;
        }
    }, [])
    return (
        <>
            <br />
            <div id="top" style={{ display: 'flex', justifyContent: 'flex-start' }}>
                {CurrentComponent[currentModule]()}
            </div>

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

    )
}

export default Syllabus

