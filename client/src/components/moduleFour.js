import React from 'react'
// importing graphic
import Wallet_graph from "../assets/wallet_graphic.svg"
import Trans_graph from "../assets/transaction_graphic.svg"
//importing in styles
import "../pages/syllabus/syllabus.css"

const ModuleFour = () => {
    return (
        <div className='container'>
            <div className="row">
                <h1>Module 4 - Cryptocurrency Wallets</h1>
                <hr />
                <p>&emsp;Since cryptocurrencies are fully digital currency users needed a way to store their currencies in a safe location as well as create the ability to interact with the blockchain to use the currency that users have. To solve this issue programmers have created three main types of cryptocurrency wallets; Software wallets, Hardware wallets, and Paper wallets. These three main wallets can be further broken down into two categories based on their usage which would be “Hot” wallets and “Cold” wallets. </p>
                <br />
                <p>&emsp;Cryptocurrency wallets contain the tools that users need to access the blockchain and send the data which can be used to send and receive digital currencies. There is no physical storing of currency in these wallets but rather the wallets contain the data which represents the currency as well as the keys to the wallet needed to interact with the blockchain. In a typical cryptocurrency transaction a user will need 2 keys (both one of the the Private keys as well as one of the Public keys) associated with their crypto wallet.</p>
                <br />
                <div className="img_container">
	                <img className="graphic" src={Trans_graph} alt="Transaction"/>
                </div>
                <br />
                <p>&emsp;In order to use a cryptocurrency users must first create their cryptocurrency wallet. Upon creating users will be given a set of addresses, Public keys, and Private keys. The keys are generated by the application which created the wallet and once the keys are generated the program then generates the wallet address based on the Public key that was generated. Users can use the wallet address to send or receive currency to a specific user. Think of a wallet address like a home address; to send a letter or package to someone you must know where you would like to send that item.</p>
                <br />
                <p>&emsp;To maintain the security of your crypto wallet the most important thing to remember is to never disclose your Private key to anyone. No company will ever need your Private key to process a transaction and the Private key is the set of data which gives anyone access to the associated wallet. The Private key is also the tool that allows users to digitally sign transactions as well as it can be used to recover the wallet address as well as the Public key that was originally generated with that account. Anyone who has access to the Private key can use it to transfer funds from a crypto wallet making it the most important element to keep safe while interacting with cryptocurrencies. More commonly now most crypto wallets use a “seed phrase” or a set of random words that are used to generate all the private keys associated with the wallet. Treat these seed phrases as though they were the password as the seed phrase can be used just like the Private key to get access to the wallet that they are linked to.</p>
                <br />
                <p>&emsp;Oftentimes wallets can be considered as being “Hot” or “Cold”. A “Hot” wallet is any wallet that is connected to the internet. These wallets are easy to set up and the funds are very easily accessible when needing to transfer currencies on the blockchain. A “Hot” wallet can be any wallet that is generated and stored using either a web application, a desktop application or a mobile application. However since “Hot” wallets are connected to the internet there is always the chance of a hacker getting access to the funds stored on these wallets. It is imperative that you research the companies that offer these types of wallets to make sure they are reputable and can allow you to safely and securely access your funds using appropriate data encryption methods. Popular applications for users to create wallets include Coinbase, Robinhood, and SoFi.</p>
                <br />
                <div className="img_container">
	                <img className="graphic" src={Wallet_graph} alt="Types of Wallets"/>
                </div>
                <br />
                <p>&emsp;If security is the top priority when selecting a type of wallet then choosing a “Cold” wallet may be the best option. “Cold” wallets can come in the form of Hardware wallets which are usually a USB drive (or any physical harddrive) that stores all the associated keys and wallet addresses as well as Paper wallets which store that same data physically using a pen and paper. Paper wallets are considered out of date as well as unreliable since anyone who sees that data can copy it down and use it to get access to the wallet. Hardware wallets can have additional security in the form of password protection to access the information stored on the device. These wallets sacrifice ease of use in order to maintain these protections and oftentimes it can become quite difficult to access funds stored on “Cold” wallets. Because of this these wallets are better suited for investors or users who wish to hold on to their cryptocurrencies for a long period of time. Popular Hardware wallets include those by Trezor as well as Ledger.</p>
                <button>Module 4 quiz</button>
            </div>
        </div>
    )
}

export default ModuleFour