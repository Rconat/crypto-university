import React from 'react'
//importing in styles
import "../pages/syllabus/syllabus.css"

const ModuleFive = ({ switchCurrentModule }) => {
    return(
        <div className = 'container_syllabus'>
            <div className="row">
                <h1>Module 5 - Purchasing Cryptocurrencies safely</h1>
                <hr />
                <p>&emsp;While the topic of cryptocurrencies may seem overwhelming at first if you follow simple steps and make sure you are doing the research investing in cryptocurrencies can be very financially beneficial. Cryptocurrencies can give you the piece of mind that you are diversifying your wealth into many different areas of the economy just as in the past investing in gold, silver, or other precious materials has been used to overcome economic recessions. The three main places to exchange funds for cryptocurrencies include; a cryptocurrency exchange, a P2P exchange, and a Bitcoin ATM.</p>
                <br />
	            <p>&emsp;Three very popular cryptocurrency exchanges are Coinbase (and Coinbase Pro), Binance, and Kraken. While each of these exchanges has its benefits and drawbacks researching all of them will give a good sense of the different features and securities offered by each. These exchanges give up to date prices on exchange rates and typically will facilitate the trades through their websites as a broker. Cryptocurrency exchanges are great for beginners because they often explain the steps to successfully buying and storing cryptocurrencies but in exchange for these benefits users often have to pay more for transactions.</p>
	            <p>&emsp;P2P exchanges operate a little differently than cryptocurrency exchanges. P2P exchanges connect buyers with sellers who are looking for specific cryptocurrencies to trade. In a P2P exchange the value of the transaction is set by the seller and does not always reflect what many exchanges have set the value of these currencies to. In this way the seller is acting almost as a store setting their own prices and if a buyer does not agree with the price, they can try to find another seller with a more favorable exchange rate. These types of exchanges often have little to no transaction fees associated with their services so it may seem enticing for first time buyers however there are much less securities offered through these types of services. Popular P2P exchanges include Bisq, BitQuick, and Paxful.</p>
                <br />
                <p>&emsp;Bitcoin ATMs are physical locations that allow users to use cash or debit card to purchase Bitcoin or Bitcoin Cash. These machines connect to either a bitcoin wallet directly or can operate through an exchange that is associated with that ATM. These ATMs are generally safe but can have high transaction fees as well as limit the user to only exchanging for Bitcoin and Bitcoin Cash. While Bitcoin and Bitcoin Cash are two of the most popular cryptocurrencies if users wish to gain the benefits offered by other crypto networks they would have to make use of one of the other options for purchasing cryptocurrencies.</p> 
                <br />
                <p>&emsp;It is important to remember that while an exchange or a method of purchasing a cryptocurrency may be safe that does not mean that the cryptocurrency has less risk or dropping in value. Cryptocurrency markets are highly volatile and can change by large percentages in a matter of minutes. Investing in cryptocurrencies is considered a very high risk investment and researching in advance is always the best way to try to mitigate any risk but even then one should only invest in cryptocurrencies money they are able to lose without regret.</p>
                <br />
                <p>&emsp;Even if one is extremely careful with their investments the funds that are invested in cryptocurrencies can be lost forever due to unforeseen events. A man named Matthew Mellon passed away in 2018 with approximately $1 billion value in the popular cryptocurrency XRP. Because the passwords to his crypto wallets were only known to him his family was unable to retrieve the funds upon his death. To this day these accounts were never recovered and the fortune is lost to his family and relatives.</p>
                <br /> 
                <p>&emsp;With the high prices of cryptocurrencies and large sums of funds stored in the data collected at crypto exchanges it makes them a large target for hackers. Crypto exchanges have the difficult job of combating these cyber attacks and for the most part are successful in fending off would be criminals trying to get access to passwords and digital funds. In 2019 there were 12 major breaches of crypto exchanges which amounted to a total of $292,665,886 US dollars. As recently as January 2021 a popular crypto exchange known as Livecoin has lost control over its servers to hackers and since has urged its customers to no longer use their service.</p>
                <br />
                <p>&emsp;Storing cryptocurrency on a physical Hard Drive is a great way to maintain a “Cold” wallet but even this method is not foolproof to keeping your currency safe. James Howells, a 35-year-old IT engineer from Wales said he accidentally threw away a harddrive containing the private key needed to access his currency. Howells claims to have had 7,500 bitcoins in the wallet that the private key gave access to. As of April 2021 the value of those bitcoins would amount to over $384 million US. In Howells’ case he was to blame for recklessly discarding his Hard Drive however Hard Drives have the potential to become corrupted since they do wear out over time. Backing up this data in multiple places can certainly save a lot of stress and headaches.</p>
                <br />
                <button onClick = {e => switchCurrentModule(e, "module4")}>Previous Module</button>
                <button>Module 5 quiz</button>
                <button onClick = {e => switchCurrentModule(e, "syllabus")}>Syllabus</button>
            </div>
        </div>
    )
}

export default ModuleFive