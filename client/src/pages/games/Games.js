import React, {useEffect, userEffect, useState} from 'react'
import ChecksumInfo from "../../components/checksumInfo/checksumInfo"
import Checksum from "../../components/checksum/checksum"
import "./Games.css"

const Games = () => {


    const [toggleGame, setToggleGame] = useState(false)

    const start = () => {
        setToggleGame(true)
    } 

    return(
    <>
        <ChecksumInfo />
        <h3 id="game-start">To complete this game try to complete a checksum verification for at least 10 different sets of hashed data</h3>
        <br />
        <div className="btn-container">
            <button 
                onClick={start} 
                id="start-check-btn"
            >Start</button>
        </div>
        <div id="game-div">{toggleGame && <Checksum />}</div>
    </>
    )
}

export default Games