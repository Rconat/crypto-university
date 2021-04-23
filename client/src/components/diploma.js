import React from 'react'
import DiplomaPic from "../assets/diploma_small.jpg"


class Diploma extends React.Component {
    render() {
        return(
            <div className = 'diploma-container' style={this.props.style}>
                <img src={ DiplomaPic } alt="Diploma" />
            </div>
        )
    }
}

export default Diploma