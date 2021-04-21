import React, { useEffect, useState, useRef } from 'react';
import API from './../../utils/API.js';
import Table from './../../components/table'
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
    const columns = () => {
        return [
            {
                header: 'Name',
                field: 'name',
            },
            {
                header: 'Price',
                field: 'price',
            },
            {
                header: 'Change',
                field: 'change',
            },
            {
                header: 'Volume',
                field: 'volume',
            },
            {
                header: 'Market cap',
                field: 'marketCap',
                // content: (row) => {
                // This returns the current row object, 
                // Allowing you to override default value of a field 
                // You need to return a Html element within content
                // return <h1 style={{ background: 'red'}}>{row.marketCap}</h1>
                // }
            },
            {
                header: 'Supply',
                field: 'supply',
                // style: {
                // this styles will be add the the current column cell
                // color: 'lightgreen'
                // }
            }
        ]
    }

    const rows = () => {
        return prices.map((item) => ({
            name: item.name,
            price: item.price,
            change: item['1d']?.price_change,
            volume: item['1d']?.volume,
            marketCap: item.market_cap,
            supply: item.max_supply,
        }))
    }
    return (
        <>
            <div>PRICES</div>
            <Table
                columns={columns()}
                rows={rows()}
            />
        </>
    )
};


export default Investments;