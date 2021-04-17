import React, { useRef, useState } from 'react'
import ReactToPrint from 'react-to-print'

// importing diploma component
import Diploma from '../../components/diploma'
import FakeData from './fakeData.js';

const Syllabus = () => {
    const componentRef = useRef()
    const [syllabi, setSyllabi] = useState(FakeData());
    return(
        <div style={{ display: 'flex', justifyContent: 'flex-start'}}>
            {syllabi.map((item) => (
                <div style={{ background: item.color, color: 'white'}}>
                    {item.title}
                </div>
            ))}
        </div>
    )
}

export default Syllabus


//     <ReactToPrint
//         trigger={() => <button>Print Diploma</button>}
//         content={() => componentRef.current}
//     />
//     <Diploma ref={componentRef}/>