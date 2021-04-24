import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'
import './login.css'
import Logos from '../../components/logos/logos'
import FlyingLogo from '../../assets/logos/coin_72x72.svg'

const ICONS = [
    {
        img: "https://cryptologos.cc/logos/bitcoin-btc-logo.svg?v=010",
        alt: "Bitcoin"
    },
    {
        img: "https://cryptologos.cc/logos/ethereum-eth-logo.svg?v=010",
        alt: "Ethereum"
    },
    {
        img: "https://cryptologos.cc/logos/tether-usdt-logo.svg?v=010",
        alt: "Tether"
    },
    {
        img: "https://cryptologos.cc/logos/cardano-ada-logo.svg?v=010",
        alt: "Cardano"
    },
    {
        img: "https://cryptologos.cc/logos/polkadot-new-dot-logo.svg?v=010",
        alt: "Polkadot"
    },
    {
        img: "https://cryptologos.cc/logos/cosmos-atom-logo.svg?v=010",
        alt: "Cosmos"
    },
    {
        img: "https://cryptologos.cc/logos/binance-coin-bnb-logo.svg?v=010",
        alt: "Binance Coin"
    },
    {
        img: "https://cryptologos.cc/logos/xrp-xrp-logo.svg?v=010",
        alt: "XRP"
    },
    {
        img: "https://cryptologos.cc/logos/uniswap-uni-logo.svg?v=010",
        alt: "Uniswap"
    },
    {
        img: "https://cryptologos.cc/logos/dogecoin-doge-logo.svg?v=010",
        alt: "Dogecoin"
    },
    {
        img: "https://cryptologos.cc/logos/litecoin-ltc-logo.svg?v=010",
        alt: "Litecoin"
    },
    {
        img: "https://cryptologos.cc/logos/chainlink-link-logo.svg?v=010",
        alt: "Chainlink"
    },
    {
        img: "https://cryptologos.cc/logos/stellar-xlm-logo.svg?v=010",
        alt: "Stellar"
    },
    {
        img: "https://cryptologos.cc/logos/vechain-vet-logo.svg?v=010",
        alt: "VeChain"
    },
    {
        img: "https://cryptologos.cc/logos/sushiswap-sushi-logo.svg?v=010",
        alt: "SushiSwap"
    },
    {
        img: FlyingLogo,
        alt: "Crypto University"
    },
]
const Login = () => {

    const emailRef = useRef()
    const passwordRef = useRef()
    const { login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError('')
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch {
            setError('Failed to sign in')
        }
        setLoading(false)
    }

    return (
        <div className="body-container">
            <div className="jumbotron">
                <h1>Crypto University</h1>
                <p>Your guide to understanding crypto currency</p>
            </div>
            <div className="container main-style">
                <h1 className="main-text">Log In</h1>
                <br />
                {error && <alert className="alert alert-danger" role="alert">{error}</alert>}
                <form onSubmit={handleSubmit} className="form">
                    <input id="email" type="email" ref={emailRef} placeholder="Email" required></input>
                    <input id="password" type="password" ref={passwordRef} placeholder="Password" required></input>
                    <button disabled={loading} type="submit">Log In</button>
                </form>
                <div className="login-text">
                    <Link to="/forgot-password">Forgot Password?</Link>
                </div>
                <div className="login-text">
                    Need an account? <Link to="/signup">Sign Up</Link>
                </div>
                <div className="wrapper">
                    <ul className="bg-bubbles">
                        {ICONS.map(item => (
                            <Logos img={item.img} alt={item.alt} />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Login