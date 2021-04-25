import React from 'react'
//importing in styles
import "../pages/syllabus/syllabus.css"

// tweaked module file names to match data structure in parent file
const Overview = ({ switchCurrentModule }) => {
    return (
        <div className="container dashboard-container">
            <h1 className="syllabus-heading">Syllabus Overview</h1>
            <hr />
            <div className="row" onClick={e => switchCurrentModule(e, "ModuleOne")}>
                <div className="col-4">
                    <h3><button className="overview-btn">Module 1</button></h3>
                </div>
                <div className="col-8">
                    <h3 className="module">Centralization vs Decentralization</h3>
                </div>
            </div>
            <div className="row" onClick={e => switchCurrentModule(e, "ModuleTwo")}>
                <div className="col-4">
                    <h3><button className="overview-btn">Module 2</button></h3>
                </div>
                <div className="col-8">
                    <h3 className="module">What is Blockchain?</h3>
                </div>
            </div>
            <div className="row" onClick={e => switchCurrentModule(e, "ModuleThree")}>
                <div className="col-4">
                    <h3><button className="overview-btn">Module 3</button></h3>
                </div>
                <div className="col-8">
                    <h3 className="module">What is Cryptocurrency?</h3>
                </div>
            </div>
            <div className="row" onClick={e => switchCurrentModule(e, "ModuleFour")}>
                <div className="col-4">
                    <h3><button className="overview-btn">Module 4</button></h3>
                </div>
                <div className="col-8">
                    <h3 className="module">Cryptocurrency Wallets</h3>
                </div>
            </div>
            <div className="row" onClick={e => switchCurrentModule(e, "ModuleFive")}>
                <div className="col-4">
                    <h3><button className="overview-btn">Module 5</button></h3>
                </div>
                <div className="col-8">
                    <h3 className="module">Purchasing and maintaining Cryptocurrencies safely</h3>
                </div>
            </div>
        </div>
    )
}

export default Overview