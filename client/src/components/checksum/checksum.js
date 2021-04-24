import React from 'react'
import "./checksum.css"

function Checksum() {

    var randomNums = []
    var divisor;
    var remainder;
    var userScore;

    while(randomNums.length < 8){
        var r = Math.floor(Math.random() * 20) + 1
        if (randomNums.indexOf(r) === -1 ) randomNums.push(r)
    }

    divisor = Math.floor(Math.random() * 10) + 1

    var sum = randomNums.reduce(function(a,b){
    return a + b
    }, 0);

    remainder = (sum % divisor)

    console.log("random numbers", randomNums);
    console.log("divisor", divisor)
    console.log("sum of numbers", sum)
    console.log("remainder", remainder)

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
            <form>
                <textarea id="userEntry"></textarea>
            </form>
        </div>
    
    </div>
}

export default Checksum