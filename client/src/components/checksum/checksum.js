import React, { useState, useEffect } from 'react'
import "./checksum.css"
import Timer from "../timer"

function Checksum() {

    const [userScore, setUserScore] = useState(0)
    const [userEntry, setUserEntry] = useState()
    const [randomNums, setRandomNums] = useState([])
    const [divisor, setDivisor] = useState(1)
    const [remainder, setRemainder] = useState(1)

    const textInput = React.useRef()
    const clearInput = () => (textInput.current.value = "")

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(e)
        // console.log("target Value -", parseInt(e.target[0].value))

        setUserEntry(parseInt(e.target[0].value))
    }

    const checkNum = () => {
        console.log("On Form Submit", remainder, userEntry)
        if (userEntry === remainder) {
            setUserScore(userScore + 1)
            generateRandomNums()
        } else {
            generateRandomNums()
        }
    }

    const generateRandomNums = () => {

        let localDivisor;
        let localRandomNums = []

        while(localRandomNums.length < 8){
            var r = Math.floor(Math.random() * 20) + 1
            if (localRandomNums.indexOf(r) === -1 ) localRandomNums.push(r)
        }

        setRandomNums(localRandomNums)
    
        localDivisor = (Math.floor(Math.random() * 10) + 3)

        setDivisor(localDivisor)
    
        let sum = localRandomNums.reduce(function(a,b){
        return a + b
        }, 0);
    
        setRemainder(sum % localDivisor)
    
        // console.log("sum of numbers", sum)

    }

    const checkScore = () => {
        if (userScore === 10) {
            console.log("You have passed the Checksum game!")
        }
    }

    // console.log("random numbers", randomNums);
    // console.log("divisor", divisor)
    console.log("remainder", remainder)
    console.log("user Entry -", userEntry)

    useEffect(() => {
        generateRandomNums()
    }, [])

    useEffect(() => {
        // console.log("User Entry -", userEntry)
        // checking user input against remainder
        checkNum()

        // clearing the user input
        clearInput()

    }, [userEntry])

    useEffect(() => {
        checkScore()
    }, [userScore])

    return <div id="checksumGame" className="container">
        <div className="row">
            <div className="col-6">
                <h1 id="score">Score : {userScore}</h1>
            </div>
            <div className="col-6">
                <Timer/>
            </div>
        </div>
        
        <div id="row">

            {randomNums.map((num) => (
                <div id="randomNums" className="box">
                    <h1 id="randomNumsText">{num}</h1>
                </div>
            ))}

            <div id="divisor" className="box">
                <h1 id="divisorText">{divisor}</h1>
            </div>

        </div>
        
        <div className="row">
            <div className="col-8" id="checkRow">
                <h1 id="checkRow">Checksum Verification Number - </h1>
            </div>
            <div className="col-4">
                <div id="textField">
                    <form onSubmit={handleSubmit}>
                        <input 
                            ref={textInput}
                            type="text" 
                            id="userEntry"
                        />
                    </form>
                </div>
            </div>
        </div>
    
    </div>
}

export default Checksum