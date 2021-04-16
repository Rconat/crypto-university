import React, { useRef } from 'react'
import ReactToPrint from 'react-to-print'

// importing diploma component
import Diploma from '../../components/diploma'
import Quiz from '../../components/quiz'

const Syllabus = () => {
    const componentRef = useRef()

    return(
        // <>
        //     <ReactToPrint
        //         trigger={() => <button>Print Diploma</button>}
        //         content={() => componentRef.current}
        //     />
        //     <Diploma ref={componentRef}/>
            <Quiz />
        // </>
    )
}

export default Syllabus