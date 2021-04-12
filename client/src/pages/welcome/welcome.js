import React from 'react'
import ReactDOM from 'react-dom';
import './welcome.css'

class Welcome extends React.Component {
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <h1 className="welcome-title">Welcome</h1>

                    <form className="form">
                        <input type="text" placeholder="Username"></input>
                        <input type="text" placeholder="Password"></input>
                        <button type="submit" id="login-button">Login</button>
                    </form>
                </div>
                <ul className="bg-bubbles">
                    <li className="logo">
                        <img src="https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=010" alt="Bitcoin"></img>

                    </li>
                    <li className="logo">
                        <img src="https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=010" alt="Ethereum"></img>

                    </li>
                    <li className="logo">
                        <img src="https://cryptologos.cc/logos/tether-usdt-logo.svg?v=010" alt="Tether"></img>
                    </li>
                    <li className="logo">
                        <img src="https://cryptologos.cc/logos/cardano-ada-logo.svg?v=010" alt="Cardano"></img>
                    </li>
                    <li className="logo">
                        <img src="https://cryptologos.cc/logos/polkadot-new-dot-logo.svg?v=010" alt="Polkadot"></img>
                    </li>
                    <li className="logo">
                        <img src="https://cryptologos.cc/logos/cosmos-atom-logo.svg?v=010" alt="Cosmos"></img>
                    </li>
                    <li className="logo">
                        <img src="https://cryptologos.cc/logos/binance-coin-bnb-logo.svg?v=010" alt="Binance Coin"></img>
                    </li>
                    <li className="logo">
                        <img src="https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=010" alt="XRP"></img>
                    </li>
                    <li className="logo">
                        <img src="https://cryptologos.cc/logos/uniswap-uni-logo.svg?v=010" alt="Uniswap"></img>
                    </li>
                    <li className="logo">
                        <img src="https://cryptologos.cc/logos/dogecoin-doge-logo.svg?v=010" alt="Dogecoin"></img>
                    </li>
                    <li className="logo">
                        <img src="https://cryptologos.cc/logos/litecoin-ltc-logo.svg?v=010" alt="Litecoin"></img>
                    </li>
                    <li className="logo">
                        <img src="https://cryptologos.cc/logos/chainlink-link-logo.svg?v=010" alt="Chainlink"></img>
                    </li>
                    <li className="logo">
                        <img src="https://cryptologos.cc/logos/stellar-xlm-logo.svg?v=010" alt="Stellar"></img>
                    </li>
                    <li className="logo">
                        <img src="https://cryptologos.cc/logos/vechain-vet-logo.svg?v=010" alt="VeChain"></img>
                    </li>
                    <li className="logo">
                        <img src="https://cryptologos.cc/logos/sushiswap-sushi-logo.svg?v=010" alt="SushiSwap"></img>
                    </li>
                </ul>

            </div>

        )
    }
}

export default Welcome