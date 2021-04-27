import React, { useEffect, useState, useRef } from 'react';
import API from '../../utils/API'
import './ticker.css'

const Ticker = () => {

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
        }).catch(console.log)
        return () => {
            mounted = false;
        }
    }, [])

    // const rows = () => {
    //     return prices.map((item) => ({
    //         name: item.name,
    //         price: item.price,
    //         change: item['1d']?.price_change,
    //         volume: item['1d']?.volume,
    //         marketCap: item.market_cap,
    //         supply: item.max_supply,
    //     }))
    // }
    // console.log(rows())

    const coinPrice = (price) => {
        if (price >= 1) {
            return Math.floor(price * 100) / 100
        }
        if (price <= -1) {
            return Math.ceil(price * 100) / 100
        }
        return price
    }

    const coinChange = (change) => {
        if (change > 0) {
            return `tickerChangeGreen`
        }
        if (change < 0) {
            return `tickerChangeRed`
        }
    }

    return (
        <>
            <div className="ticker-wrap">
                <div className="ticker">
                    {prices.map((item, index) => (
                        <div key={index} className="ticker__item">
                            <div>
                                {item.name}: ${coinPrice(item.price)}
                                <div className="tickerChangeItem">
                                    Change
                                    <span className={`${coinChange(item['1d']?.price_change)} `}> ${coinPrice(item['1d']?.price_change)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Ticker