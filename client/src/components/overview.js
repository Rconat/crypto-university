import React from 'react'
//importing in styles
import "../pages/syllabus/syllabus.css"

// tweaked module file names to match data structure in parent file
const Overview = ({ switchCurrentModule }) => {
    return(
        <div className="overview container">
            <h1>Syllabus overview</h1>
            <hr />
            <div className="row" onClick={ e => switchCurrentModule(e, "ModuleOne") }>
                <div className="col-4"> 
                    <h3>Module 1</h3> 
                </div>
                <div className="col-8"> 
                    <h3 className="module">Centralization vs Decentralization</h3> 
                </div>
            </div>
            <div className="row" onClick={ e => switchCurrentModule(e, "ModuleTwo") }>
                <div className="col-4"> 
                    <h3>Module 2</h3> 
                </div>
                <div className="col-8"> 
                    <h3 className="module">What is Blockchain?</h3> 
                </div>
            </div>
            <div className="row" onClick={ e => switchCurrentModule(e, "ModuleThree") }>
                <div className="col-4"> 
                    <h3>Module 3</h3> 
                </div>
                <div className="col-8"> 
                    <h3 className="module">What is Cryptocurrency?</h3> 
                </div>
            </div>
            <div className="row" onClick={ e => switchCurrentModule(e, "ModuleFour") }>
                <div className="col-4"> 
                    <h3>Module 4</h3> 
                </div>
                <div className="col-8"> 
                    <h3 className="module">Cryptocurrency Wallets</h3> 
                </div>
            </div>
            <div className="row" onClick={ e => switchCurrentModule(e, "ModuleFive") }>
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