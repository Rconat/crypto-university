import React, { useState, useEffect } from 'react'
import "./checksum.css"

function Checksum(props) {

    const [userEntry, setUserEntry] = useState(1)
    const [randomNums, setRandomNums] = useState([])
    const [divisor, setDivisor] = useState(1)
    const [remainder, setRemainder] = useState(1)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("target Value -", e.target[0].value)

        setUserEntry(e.target[0].value)
        .then(console.log("User Entry -", userEntry))
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

    // console.log("random numbers", randomNums);
    // console.log("divisor", divisor)
    // console.log("remainder", remainder)
    

    useEffect(() => {
        generateRandomNums()
    }, [])

    return <div id="checksumGame">
        
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
    
        <div id="textField">
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    id="userEntry"
                />
            </form>
        </div>
    
    </div>
}

export default Checksum