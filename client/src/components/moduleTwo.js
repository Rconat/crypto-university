import React from 'react'
//importing graphics
import Blockchain_graph from "../assets/blockchain_graphic.svg"
//importing in styles
import "../pages/syllabus/syllabus.css"

const ModuleTwo = () => {
    return(
    <div className = 'container'>
        <div className="row">
            <h1>Module 2 - What is Blockchain?</h1>
            <hr />
            <p>&emsp;Decentralizing the ledger was only one of the many challenges that needed to be overcome when creating cryptocurrencies. Another problem which needed to be solved was how to appropriately validate transactions taking place over the network. To solve this issue they implemented a method of validation first introduced in 1991 as a way to create a digital timestamp which acted as a sort of digital notary for important documents. The process by which this was done was called a blockchain.</p>
            <br />
            <p>&emsp;A blockchain refers to any sort of information which uses this validation process. The blockchain also makes use of data hashing in order to maintain its security. Data hashing is the ability to translate a large set of data into a string of letters and numbers using an algorithm. Using these elements there are three main parts to a single “block”; the data, the hash (resulting string based on the algorithm used as validation), and the hash of the previous block. If the data inside of the block is changed because the hash is generated based on that data the resulting hash will be affected. Since the block also contains the hash of the previous block the blocks are in a sense “linked” together forming a long chain which continually grows as data is added: the blockchain.</p>
            <br/>
            <p>&emsp;As the blockchain calculates a block and then adds a new block to the chain the previous block remains there unchanging forever. Because the data that is stored in each block never changes the blockchain is a perfect tool for tracking information as it changes over time.</p>
            <br />	
            <p>&emsp;The first block in a chain is always referred to as the Genesis Block and is the only block in the chain to not reference the hash of the previous block because there is no previous block to reference. While now mainly used in cryptocurrencies, the blockchain technology can be used for a multitude of other applications across the technology industry as a form of secure storing and distributing of data. Cryptocurrencies often boast that they are immutable meaning that the data stored in the network on the blockchain is so secure that it cannot be changed.</p>
            <br />
	        <div className="img_container">
                <img className="graphic" src={Blockchain_graph} alt="Blockchain"/>
            </div>
            <br/>
            <p>&emsp;Blockchains can also use a process known as proof-of-work which are additional calculations that must be performed in order to create a new block on the chain. Just like data hashing if the data is changed in a block, a new proof-of-work must be calculated for that block and each additional block in the chain. While the proof-of-work slows down the generation of new blocks in the chain it is a crucial and necessary step in the process to maintain the security of the blockchain and keep the information from being tampered with. </p>
            <br />
            <p>&emsp;While these processes were available as early as 1991 it wasn’t until a programmer known as “Satoshi Nakamoto” put them all together in 2009 and implemented them into a digital currency to create the first cryptocurrency known as Bitcoin. Nakamoto chose to use the blockchain coupled with the proof-of-work as a digital currency because of its secure nature as well as the benefits that come along with a decentralized structure. Bitcoin uses an algorithm known as “Sha256” to hash the data for each block.</p>
            <br /> 
            <p>&emsp;Since the Bitcoin network also functions through use of a peer-to-peer network the blockchain is available to and managed by anyone that wants to join the network. Because the blockchain ledgers are accessible by anyone it makes it harder for criminals to tamper with the data being distributed over the network. </p>
            <button>Module 2 Test</button>
        </div>
    </div>
    )
}

export default ModuleTwo