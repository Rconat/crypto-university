import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print'

// importing diploma component
import Diploma from '../../components/diploma'

const Syllabus = () => {
    const componentRef = useRef()

    return(
        <>
            <ReactToPrint
                trigger={() => <button>Print Diploma</button>}
                content={() => componentRef.current}
            />
            <Diploma ref={componentRef}/>
        </>
    )
}

export default Syllabus