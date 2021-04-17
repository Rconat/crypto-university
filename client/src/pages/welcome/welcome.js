import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import './welcome.css'
import FlyingLogo from '../../assets/logos/cu_logo_144x144.png'

const Welcome = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/dashboard')
        } catch (error){
            console.log(error.message)
            setError(error.message)
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
                <h1 className="sign-up-text">Sign Up</h1>
                {error && <alert className="alert" variant="danger">{error}</alert>}
                <form onSubmit={handleSubmit} className="form">
                    <input id="email" type="email" ref={emailRef} placeholder="Email" required></input>
                    <input id="password" type="password" ref={passwordRef} placeholder="Password" required></input>
                    <input id="password-confirm" type="password" ref={passwordConfirmRef} placeholder="Confirm Password" required></input>
                    <button disabled={loading} type="submit" id="sign-up-button">Sign Up</button>
                </form>
                <div className="login-text">
                    Already have an account? <Link to="/login">Log In</Link>
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

export default Welcome