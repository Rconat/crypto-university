import React from 'react'
//importing in styles
import "../pages/syllabus/syllabus.css"

const Overview = ({ switchCurrentModule }) => {
    return(
        <div className="overview container">
            <h1>Syllabus overview</h1>
            <hr />
            <div className="row" onClick={ e => switchCurrentModule(e, "module1") }>
                <div className="col-4"> 
                    <h3>Module 1</h3> 
                </div>
                <div className="col-8"> 
                    <h3 className="module">Centralization vs Decentralization</h3> 
                </div>
            </div>
            <div className="row" onClick={ e => switchCurrentModule(e, "module2") }>
                <div className="col-4"> 
                    <h3>Module 2</h3> 
                </div>
                <div className="col-8"> 
                    <h3 className="module">What is Blockchain?</h3> 
                </div>
            </div>
            <div className="row" onClick={ e => switchCurrentModule(e, "module3") }>
                <div className="col-4"> 
                    <h3>Module 3</h3> 
                </div>
                <div className="col-8"> 
                    <h3 className="module">What is Cryptocurrency?</h3> 
                </div>
            </div>
            <div className="row" onClick={ e => switchCurrentModule(e, "module4") }>
                <div className="col-4"> 
                    <h3>Module 4</h3> 
                </div>
                <div className="col-8"> 
                    <h3 className="module">Cryptocurrency Wallets</h3> 
                </div>
            </div>
            <div className="row" onClick={ e => switchCurrentModule(e, "module5") }>
                <div className="col-4"> 
                    <h3>Module 5</h3> 
                </div>
                <div className="col-8"> 
                    <h3 className="module">Purchasing and maintaining Cryptocurrencies safely</h3> 
                </div>
            </div>
        </div>
    )
}

export default Overview