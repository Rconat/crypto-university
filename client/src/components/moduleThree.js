import React from 'react'
//importing in styles
import "../pages/syllabus/syllabus.css"

// passing in props for the previous page, next page, and quiz redirect
const ModuleThree = ({ switchCurrentModule, quizRedirect, prev, next }) => {
    return (
        <div className='container'>
            <div className="row">
                <h1 id="module-3">Module 3 - What is Cryptocurrency?</h1>
                <hr />
                <p>&emsp;When first being introduced to the topic of cryptocurrencies it is important to understand the concepts of blockchain as well as the peer-to-peer (P2P) network as that is truly at the core of what a cryptocurrency is and how it functions. However, to put all these concepts together and combine them with the idea of how we use currency in our societies today as well as how cryptocurrencies function in practical usage; a cryptocurrency is a fully digital currency that can be used to buy goods and services. Cryptocurrencies are fully digital because there is no physical representation of the currency and it only resides in the network of users who keep track of the running ledger through the blockchain.</p>
                <br />
                <p>&emsp;Originally there were only a few places where you could spend cryptocurrencies, but lately with their increased popularity the list of companies which accept these digital currencies as tender is quickly growing. As of March 2021 the popular payment processing company PayPal now accepts certain cryptocurrencies such as Bitcoin, Litecoin, Ethereum, and Bitcoin Cash for its transactions. Now you can buy virtually anything and everything using cryptocurrency.</p>
                <br />
                <p>&emsp;While the technology behind cryptocurrencies is very secure that does not mean that every cryptocurrency is a good idea to support, join, or even invest in. Since the technology is relatively new there is almost no regulation in cryptocurrencies. Anyone who has the technology can theoretically create a new cryptocurrency and release it on a new network. It is important to research any cryptocurrency you are thinking about purchasing and using to make sure that the intentions behind the currency are proper. If the peer-to-peer network goes down or there becomes a security risk within the chain the currency may become void and unusable. The security behind a cryptocurrency can often directly tie to how useful that cryptocurrency becomes. These currencies use cryptography to secure the data that is stored on their network. Cryptography is the method of using encryption and decryption to secure data. The most common methods of cryptography which are implemented in the blockchain have been discussed in the previous module. A successful cryptocurrency must have a solid method to encrypt and decrypt their data and these methods are what gives strength, confidence in, and value to any given currency.</p>
                <br />
                <p>&emsp;Cryptocurrencies have many benefits over traditional currencies and because of that, many feel they are the currencies of the future. As discussed previously the decentralization of cryptocurrencies creates a “user first” environment as well as helps secure the network with many points of checks and validations making forging data very difficult. The transactions are easily verified making use of the blockchain technology. Finally a huge benefit of many cryptocurrencies comes from their decision to limit the total number of “coins” in circulation. </p>
                <br />
                <p>&emsp;traditional currencies we use today a major problem is inflation. Over time more and more currency is being printed and not as much currency is being removed from the system. This causes inflation which makes the value of the currency go down in relation to the goods and services that one can buy with it. When creating Bitcoin Satoshi Nakamoto designed it to have a set number of “coins” which will be in circulation on the network. Bitcoin has set the limit of coins at 21 million. As of April 2020 there are only 18.69 million coins in circulation leaving just under 3 million coins left to be ‘Mined’. Mining cryptocurrency is the process by which a new coin is created. Users who wish to mine coins can use the peer-to-peer network to validate transactions and in exchange are rewarded with currency. This process is very processor heavy and can put a strain on your graphics card (GPU) as well as cost money in the form of the electricity used to run the GPU. Once all of the coins have become mined there may be a slight increase in the transaction fees when using cryptocurrencies however it is an important process in the validation of transactions on the network and is no different than transaction fees many companies implement for using their services with traditional currencies.</p>
                <br />
                <p>&emsp;When first created in 2009 there wasn’t much use for cryptocurrencies. Because of this individuals who wanted to remain anonymous would primarily use Bitcoin on a dark web site known as the Silk Road to buy illegal products and services. It was believed at the time that using cryptocurrencies meant that the funds could never be tracked to any individual. This is however not exactly the case as anyone who knows a users’ address can see what that user has spent/received and what address has sent/received funds between them. Because of this cryptocurrencies are considered to be semi-anonymous. In the long run if a user wishes to transfer funds to a bank account or to another source that data can always be tracked and since the blockchain is immutable that data will always exist on previous blocks to be seen and accessed by anyone. Since the early days usage has become mainstream and it is much more rare to be used for illicit activity as applications such as Coinbase require users to tie their wallets to their identity. </p>
                <br />
                <p>&emsp;Cryptocurrencies have come a long way since their first conception and implementation and now are being used to store data on blockchains that include things other than just financial transactions. A popular cryptocurrency known as Ethereum uses their P2P network as a way for companies to create decentralized applications which can have any number of uses. These applications would benefit from all the same securities and protections provided by using the blockchain as well as the decentralized network and become a huge selling point to create new and exciting ideas which will ultimately make use of the Ethereum technology.  More recently the Ethereum network has been used to buy and sell NTFs (non-fungible-tokens) which gives the ability to distribute and own digital media such as pictures, videos, and even tweets. There is not much legal precedent in place for NFTs currently but the technology is pushing the limits of how we think about ownership and how we distribute digital goods.</p>
                <br />
                <div className="button-div">
                    <button className="syl-nav-btn" onClick={prev}>Previous Module</button>
                    <button className="syl-nav-btn" onClick={quizRedirect}>Module 3 Quiz</button>
                    <button className="syl-nav-btn" onClick={next}>Next Module</button>
                </div>
            </div>

        </div>
    )
}

export default ModuleThree