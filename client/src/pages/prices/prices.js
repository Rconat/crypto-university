import React, { useEffect, useState, useRef, useMemo } from 'react';
import API from './../../utils/API.js';
import Table from './../../components/table'
import Ticker from '../../components/ticker/ticker'
import "./prices.css"

const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

const numberWidthCommas = (val) => val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

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
                if (Array.isArray(response.data)) {
                    setPrices((response.data || []))
                } else {
                    setPrices([])
                }
            }
        }).catch(() => {
            if (mounted) {
                setPrices([])
            }
        })
        return () => {
            mounted = false;
        }
    }, [])

    const columns = useMemo(() => {
        return [
            {
                header: 'Name',
                field: 'name',
                content: (row) => {
                    return (
                        <div style={{ display: 'flex', justifyContent: 'flex-start', alignContent: 'flex-start' }}>
                            <img alt={`${row.name} logo`} height="24" src={row.logo_url} />
                            <span style={{ paddingLeft: '8px'}}>{row.name}</span>{' '}
                            <span style={{ paddingLeft: '8px'}}>{row.symbol}</span>
                        </div>
                    )
                }
            },
            {
                header: 'Price',
                field: 'price',
            },
            {
                header: 'Change',
                field: 'change',
                content: (row) => {
                    if (!!row.change) {
                        const color = `${row.change}`.includes('-');
                        return (
                            <span style={color ? { color: 'red' } : { color: 'lightGreen' }}>{row.change}%</span>
                        )
                    } else {
                        return (
                            <span>No data found</span>
                        )
                    }
                }
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
    }, []);

    const rows = useMemo(() => {
        return prices?.map((item) => ({
            ...(item || {}),
            name: item.name,
            price: formatter.format(item.price),
            change: item['1d']?.price_change ? Number(item['1d']?.price_change).toFixed(2).toLocaleString() : null,
            // change: item['1d'].price_change ? item['1d'].price_change : 'No data found', possibly research other optional chainging options that may do the same thing
            volume: item['1d']?.volume ? formatter.format(item['1d']?.volume) : null,
            marketCap: item.market_cap ? formatter.format(item.market_cap) : null,
            supply: item.max_supply ? numberWidthCommas(item.max_supply) : null,
        }))
    }, [prices]);

    return (
        <>
            <Ticker />
            <br/>
            <h1>Current Cryptocurrency Prices</h1>
            <br/>
            <Table
                columns={columns}
                rows={rows}
            />
        </>
    )
};


export default Investments;