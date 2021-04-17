import React, { useEffect, useRef, useState } from 'react'
import ReactToPrint from 'react-to-print'
import { useHistory } from 'react-router-dom'
// importing diploma component
import Diploma from '../../components/diploma'
import Api from '../../utils/API';

const Syllabus = () => {
    const componentRef = useRef()
    const history = useHistory(); // window.history
    const [syllabi, setSyllabi] = useState([]);
    useEffect(() => {
        let mounted = true;
        Api.syllabus().then(response => {
            if (mounted) {
                // Response
                // {
                //     "_id": "607a8dfcef66ae5a002f630b",
                //     "syllabus": [
                //         {
                //             "_id": "607a8dfcef66ae5a002f630c",
                //             "title": "Bit Coin Quiz",
                //             "color": "pink"
                //         },
                //         {
                //             "_id": "607a8dfcef66ae5a002f630d",
                //             "title": "Basic Crypto Quiz",
                //             "color": "red"
                //         },
                //         {
                //             "_id": "607a8dfcef66ae5a002f630e",
                //             "title": "Intermediate Crypto Quiz",
                //             "color": "blue"
                //         },
                //         {
                //             "_id": "607a8dfcef66ae5a002f630f",
                //             "title": "Expert Crypto Quiz",
                //             "color": "green"
                //         }
                //     ]
                // }
                console.log(response.data.syllabus)
                setSyllabi(response.data.syllabus)
            }
        })
        return () => {
            mounted = false;
        }
    }, [])
    return (
        <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
            {syllabi.map((item) => (
                <div style={{ background: item.color, color: 'white' }} onClick={event => {
                    history.push(`/quiz/${item._id}`)
                }}>
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