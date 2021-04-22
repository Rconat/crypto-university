import React, { useEffect, useRef, useState } from 'react'
import ReactToPrint from 'react-to-print'
import { useHistory } from 'react-router-dom'
// importing diploma component
import Diploma from '../../components/diploma'
import Api from '../../utils/API';
// importing Modules
import ModuleOne from "../../components/moduleOne"
import ModuleTwo from "../../components/moduleTwo"
import ModuleThree from "../../components/moduleThree"
import ModuleFour from "../../components/moduleFour"
import ModuleFive from "../../components/moduleFive"

const Syllabus = () => {
    const componentRef = useRef()
    const history = useHistory(); // window.history
    const [syllabi, setSyllabi] = useState([]);
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
                console.log(response.data.syllabus)
                setSyllabi(response.data.syllabus)
            }
        })
        return () => {
            mounted = false;
        }
    }, [])
    return (
        <>
        <br />
        <div className="overview container">
            <h1>Syllabus overview</h1>
            <hr />
            <div className="row">
                <div className="col-4"> 
                    <h3>Module 1</h3> 
                </div>
                <div className="col-8"> 
                    <h3 className="module">Centralization vs Decentralization</h3> 
                </div>
            </div>
            <div className="row">
                <div className="col-4"> 
                    <h3>Module 2</h3> 
                </div>
                <div className="col-8"> 
                    <h3 className="module">What is Blockchain?</h3> 
                </div>
            </div>
            <div className="row">
                <div className="col-4"> 
                    <h3>Module 3</h3> 
                </div>
                <div className="col-8"> 
                    <h3 className="module">What is Cryptocurrency?</h3> 
                </div>
            </div>
            <div className="row">
                <div className="col-4"> 
                    <h3>Module 4</h3> 
                </div>
                <div className="col-8"> 
                    <h3 className="module">Cryptocurrency Wallets</h3> 
                </div>
            </div>
            <div className="row">
                <div className="col-4"> 
                    <h3>Module 5</h3> 
                </div>
                <div className="col-8"> 
                    <h3 className="module">Purchasing and maintaining Cryptocurrencies safely</h3> 
                </div>
            </div>
        </div>
        <br />
        <ModuleOne />
        <ModuleTwo />
        <ModuleThree />
        <ModuleFour />
        <ModuleFive />
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            {syllabi.map((item) => (
                <div style={{ background: item.color, color: 'white' }} onClick={event => {
                    history.push(`/quiz/${item._id}`)
                }}>
                    {item.title}
                </div>
            ))}
        </div>
        
        <ReactToPrint
            trigger={() => <button>Print Diploma</button>}
            content={() => componentRef.current}
        />
        <Diploma ref={componentRef}/>
        
    </>
    )
}


export default Syllabus

