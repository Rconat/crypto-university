import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import FlyingLogo from '../../assets/logos/cu_logo_144x144.png'
import './forgotPassword.css'

const ForgotPassword = () => {

    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [message, setMessage] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setMessage('')
            setError('')
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Check your inbox for further instructions')
        } catch {
            setError('Failed to reset password')
        }
        setLoading(false)
    }

    return (
        <div className="body-container">
            <div className="jumbotron">
                <h1>Crypto University</h1>
                <p>Your guide to understanding crypto currency</p>
            </div>
            <div className="container">
                <h1 className="sign-up-text">Password Reset</h1>
                <br/>
                {error && <alert className="alert alert-danger" role="alert">{error}</alert>}
                {message && <alert className="alert alert-success" role="alert">{message}</alert>}
                <form onSubmit={handleSubmit} className="form">
                    <input id="email" type="email" ref={emailRef} placeholder="Email" required></input>
                    <button disabled={loading} type="submit" id="log-in-button">Reset Password</button>
                </form>
                <div className="login-text">
                    <Link to="/login">Login</Link>
                </div>
                <div className="login-text">
                    Need an account? <Link to="/signup">Sign Up</Link>
                </div>
                <div className="wrapper">
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
                        <li className="logo">
                            <img src={FlyingLogo} alt="Crypto University"></img>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword