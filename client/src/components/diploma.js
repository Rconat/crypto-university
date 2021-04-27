import React from 'react'
import DiplomaPic from "../assets/diploma_small.jpg"


class Diploma extends React.Component {
    render() {
        return(
            <div className = 'diploma-container' style={this.props.style}>
                <img style={{
                    position:'absolute'
                }}src={ DiplomaPic } alt="Diploma" />
                <div style={{
                    position:"absolute",
                    display:"flex",
                    zIndex:2,
                    top:"40%",
                    left:"50%"
                }}id="diplomaName">
                    <h3 style={{
                        justify:"content",
                        margin:"auto",
                        color:"black"
                        }}>{this.props.fullName}</h3>
                </div>
            </div>
        )
    }
}

export default Diploma