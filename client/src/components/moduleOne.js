import React from 'react'
//importing in graphics
import Cen_graph from "../assets/centralization_graphic.svg"
import Decen_graph from "../assets/decentralization_graphic.svg"
//importing in styles
import "../pages/syllabus/syllabus.css"


// passing in props for the previous page, next page, and quiz redirect
const ModuleOne = ({ switchCurrentModule, quizRedirect, prev, next }) => {
    return (
        <div className='container'>
            <div className="row">
                <h1>Module 1 - Centralization vs Decentralization</h1>
                <hr />
                <p>&emsp;Currency is a way for humans to exchange goods and services with those looking to acquire  those goods or services. The currency that we use is the accepted medium that allows for this exchange. Currency works because the users of the currency all generally agree on the value of that currency and for the most part understand the value that is associated with that currency. In the United states (as well as throughout most of the world today) we operate on a centralized form of currency.</p>
                <br />
                <p>&emsp;In a centralized system all of the currency is maintained and distributed by a handful of  central organizations. In the US we rely on the Department of the Treasury to mint our coins and produce paper currency that is in circulation throughout the country, but printing money is only half the battle. We also rely on the Federal Reserve (the Feds) to act as the central bank of the United States. The Federal Reserve sets general interest rates, supervises and regulates banks and financial institutions, maintains the stability of the financial system helping to reduce systemic risk that may arise in financial markets, and let’s not forget collecting taxes. </p>
                <br />
                <div className="img_container">
                    <img className="graphic img-fluid" src={Cen_graph} alt="Centralization" />
                </div>
                <h4>Centralized Currency Distribution</h4>
                <br />
                <br />
                <p>&emsp;A centralized system of currency is a great tool that a country can use in order to help govern and regulate currency within their country as well as help control markets and hopefully help mitigate risk that individuals might face while using their currency. This structure has become the backbone of the economy for many countries but at the same time poses some possible detriments. In centralized systems all of the power in regulation and control is given to a small number of people who make decisions for an entire population. While the idea is that the decisions being made will be in the best interest of the public, the banks who are strongly affected by these rules and regulations may have different ideas as to how these decisions should be decided. Where there are differing opinions like these oftentimes those with the power to make those changes can be swayed one way or another by private interests. </p>
                <br />
                <p>&emsp;In a decentralized system of currency the transactions are monitored and validated by a large number of separate entities who all share this responsibility as well as making sure that others on the network are appropriately validating transactions as well. In a decentralized system these lists of transactions (or ledger) is made public so that all those who would like to can validate and verify that the transactions are happening as they should. The decentralization of currency was not possible until the invention of computer networks that would allow for this information to be safely and securely distributed to anyone who wished to have access to it. </p>
                <br />
                <p>&emsp;A peer-to-peer network is a network of computers that all share information with each other. Computer scientists were able to implement these peer-to-peer networks in order to distribute the ledger of a currency throughout the network, thus giving access to anyone connected to the network. With this technology the first cryptocurrencies were born and were the first currencies to not be maintained by a central governing body but in fact by the users of the cryptocurrency themselves.</p>
                <br />
                <div className="img_container">
                    <img className="graphic img-fluid" src={Decen_graph} alt="Decentralization" />
                </div>
                <h4>Decentralized Currency Distribution</h4>
                <br />
                <br />
                <p>&emsp;These peer-to-peer networks also give enhanced protections for the currency in that if any servers go down on the network the data is backed on a number of other locations. Another benefit of the decentralized model is in the structure and function of the network. Because there are many entities on the network all performing the same function an error in one node does not affect the other elements. In a sense they all act as a system of checks that the other systems on the network are all working correctly.

            </p>
                <br />
                <div className="button-div">
                    <button className="syl-nav-btn" onClick={prev}>Syllabus</button>
                    <button className="syl-nav-btn" onClick={quizRedirect}>Module 1 Quiz</button>
                    <button className="syl-nav-btn" onClick={next}>Next Module</button>
                </div>
            </div>
        </div>
    )
}

export default ModuleOne