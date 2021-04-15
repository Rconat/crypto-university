import React, { useEffect, useState, useRef } from 'react';
import API from './../../utils/API.js';

const Investments = () => {
    const id = useRef(0);
    const currentId = useRef(0);
    const [prices, setPrices] = useState([]);
    useEffect(() => {
        let mounted = true;
        const requestId = ++id.current;
        API.priceTracker().then(response => {
            if (requestId < currentId.current) {
                return;
            }
            currentId.current = requestId;
            if (mounted) {
                setPrices(response.data)
            }
        }).catch(console.log)
        return () => {
            mounted = false;
        }
    }, [])
    return (
        <>
            <div>PRICES</div>
            <ul>  
            {prices.map((item, index) => <il key={index}>{item.name}</il>)} 
            </ul>
        </>
    )
};


export default Investments;