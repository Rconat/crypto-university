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
        window.scrollTo(0,100)
    }

    useEffect(() => {
        let mounted = true;
        Api.syllabus().then(response => {
            if (mounted) {
                // Response
                // {
                //     "_id": "607a8dfcef66ae5a002f630b",
                //     "syllabus": [
                //         {
                //             "_id": "607a8dfcef66ae5a002f630c",
                //             "title": "Bit Coin Quiz",
                //             "color": "pink"
                //         },
                //         {
                //             "_id": "607a8dfcef66ae5a002f630d",
                //             "title": "Basic Crypto Quiz",
                //             "color": "red"
                //         },
                //         {
                //             "_id": "607a8dfcef66ae5a002f630e",
                //             "title": "Intermediate Crypto Quiz",
                //             "color": "blue"
                //         },
                //         {
                //             "_id": "607a8dfcef66ae5a002f630f",
                //             "title": "Expert Crypto Quiz",
                //             "color": "green"
                //         }
                //     ]
                // }
                console.log(response.data)
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
        <div id="top">
            { currentModule === "syllabus" && <Overview switchCurrentModule={ switchCurrentModule }/> }
            { currentModule === "module1" && <ModuleOne switchCurrentModule={ switchCurrentModule }/> }
            { currentModule === "module2" && <ModuleTwo switchCurrentModule={ switchCurrentModule }/> }
            { currentModule === "module3" && <ModuleThree switchCurrentModule={ switchCurrentModule }/> }
            { currentModule === "module4" && <ModuleFour switchCurrentModule={ switchCurrentModule }/> }
            { currentModule === "module5" && <ModuleFive switchCurrentModule={ switchCurrentModule }/> }
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            {syllabi.map((item) => (
                <div style={{ background: item.color, color: 'white' }} onClick={event => {
                    history.push(`/quiz/${item._id}`)
                }}>
                    {item.title}
                </div>
            ))}
        </div>
        
        <div style={ {position:"absolute", left:-2000} }>
            <Diploma ref={componentRef}/>
        </div>
        <button onClick={() => {
                setDiplomaVisable(true)
                setTimeout(() =>{
                    handlePrint()
                    setDiplomaVisable(false)
                }, 500)
            }
            }>Print this out!</button>
        
        
    </>

    )
}

export default Syllabus

