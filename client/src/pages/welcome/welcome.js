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
                    <li className="square"></li>
                    <li className="square"></li>
                    <li className="square"></li>
                    <li className="square"></li>
                    <li className="square"></li>
                    <li className="square"></li>
                    <li className="square"></li>
                    <li className="square"></li>
                    <li className="square"></li>
                    <li className="square"></li>
                </ul>

            </div>

        )
    }
}

export default Welcome