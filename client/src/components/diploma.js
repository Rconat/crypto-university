import React from 'react'
import DiplomaPic from "../assets/diploma_small.jpg"


class Diploma extends React.Component {
    render() {
        return(
            <div className = 'diploma-container' style={this.props.style}>
                <img style={{
                    position:'absolute'
                }}src={ DiplomaPic } alt="Diploma" />
                <div 
                    style={{
                        width:"100%",
                        position:"absolute",
                        display:"flex",
                        zIndex:2,
                        top:"43%",
                    }}
                    id="diplomaName">
                    <h3 
                        style={{
                            paddingLeft:"-50%",
                            fontSize: "200%",
                            fontWeight:"bold",
                            justify:"content",
                            margin:"auto",
                            color:"black"
                        }}>{this.props.fullName}</h3>
                </div>
                <div 
                    style={{
                        width:"100%",
                        position:"absolute",
                        display:"flex",
                        zIndex:2,
                        bottom:"25%",   
                    }}
                    id="diplomaName">
                    <h3 
                        style={{
                            paddingLeft:"3rem",
                            fontSize: "100%",
                            fontWeight:"bold",
                            justify:"content",
                            margin:"auto",
                            color:"black"
                        }}>{new Date().toLocaleDateString(undefined, {year:"numeric", month:"2-digit", day:"2-digit"})}</h3>
                </div>
            </div>
        )
    }
}

export default Diploma