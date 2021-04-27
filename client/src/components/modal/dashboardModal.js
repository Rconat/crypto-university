import React, { useState } from 'react'
import Modal from 'react-modal'
import './dashboardModal.css'

Modal.setAppElement('#root')

const DashboardModal = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [buttonToggle, setButtonToggle] = useState(true)
    

    return (
        <>
            {buttonToggle && (
                <div className="modal-button">
                    <button onClick={() => setModalIsOpen(true)}>First time? Click Me</button>
                </div>
            )}

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={() =>{
                    setModalIsOpen(false)
                    setButtonToggle(false)
                }}
                style={
                    {
                        overlay: {
                            backgroundColor: '#f1e189'
                        },
                        content: {
                            color: 'black'
                        }
                    }
                }>
                <br />
                <h2 className="dashboard-modal-heading">Hello!</h2>
                <br />
                <p className="dashboard-modal-text">
                    This is your central hub for Crypto University. Below you will find modules that will guide you on your path to learning everything there is to know about crypto currency! Each module contains a quiz at the end that will test you on what you learned in that module. Once you complete all of the modules your progress bar will fill, and then you will earn your diploma! Your diploma will generate as a printable PDF file.
                </p>
                <p className="dashboard-modal-text">
                    <strong>Update the name displayed on your diploma in the "My account" section</strong>
                </p>
                <br />
                <div className="modal-button">
                    <button onClick={() => {
                        setModalIsOpen(false)
                        setButtonToggle(false)
                    }}>Close</button>
                </div>
            </Modal>
        </>
    )
}

export default DashboardModal
