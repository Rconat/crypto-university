import React from 'react'
//importing in graphics
import Checksum_graph from "../assets/checksum_graphic.svg"
import Failed_graph from "../assets/failed_checksum_graphic.svg"

const ChecksumInfo = () => {

    return (
        <div className='container'>
            <div className="row">
                <h1>Checksum Game</h1>
                <hr />
                <p>&emsp;One important aspect of blockchain technology is Cryptography. As we have learned in Module Two - What is Blockchain? "data hashing" is the process by which a large set of data is translated into a string of letter and numbers. This string needs to be verified that it is the correct string being sent during a transaction. In a typical blockchain data is verified when a new block is created. There are many methods to how data can be verified and the strength of the verification method often times directly affects how secure the blockchain is.</p>
                <p>&emsp;While the processes behind most datahashing can change from currency to currency as well as the algorithms that are used may be complex and multifaceted, we can break down this process in order to better understand what is going on behind the scenes on a blockchain. In order to illustrate this we will use something called a checksum. A checksum is the outcome of running an algorithm call a cryptographic hash function on a string of data. Comaring the checksum between two sets of data is a method to verify that the geenerated data matches the source data. This is the same process that blockchains use comparing the data of the new block with the previous block.</p>
                <div className="img_container">
                    <img className="graphic img-fluid" src={Checksum_graph} alt="Checksum" />
                </div>
                <p>&emsp;In this example the data being sent has already been hashed into a set of numbers. Along with the hashed another number is sent with that data. We can refer to this number as the "divisor" since we will be using it to divide by. The checksum number used to verify the data is remainder from the sum of the hashed numbers divided by the divisor. The sum of the hashed data is 87. When you divide 87 by 6 you get 14 with a remainder of 3. The checksum for this set of data would be 3.</p>
                <div className="img_container">
                    <img className="graphic img-fluid" src={Failed_graph} alt="Failed Checksum" />
                </div>
                <p>&emsp;If the data is corrupted or if the data has been maliciously altered it will change the values of the hash numbers that are being compared. This is the case with the example above where one of the numbers has been changed representing a change in the data being sent. Since the resulting checksum number does NOT match the original data this would be considered a failed checksum and the data would not be verified. This is one of the many protocols that help with keeping the blockchain a secure platform to hold and store data.</p>
                <p>&emsp;The checksum verification is a very basic version of one way that data is can be verified over a blockchain. In reality the data hashing is oftentimes continually changing and the algorithms that are used in the verification are much more complex than a simple checksum. However for our purposes this will give a basic understanding of some of the processes which a blockchain can do to verify the data when generating a new block. Try out the game below and display your knew knowledge of the checksum verification.</p>
                <h3>To complete this game try to complete a checksum verification for at least 10 different sets of hashed data</h3>
                <br />
                <button>Start</button>
            </div>
        </div>
    )
}

export default ChecksumInfo