const axios = require('axios');

module.exports = {
    getPrices: async (req, res) => {
        try {
            const params = {
                key: "b0f23293345fa551f853d322135f225e",
                ids: "BTC,ETH,XRP,CYFM,BNB,DOGE,TRX,BCH,LTC,ETC,BTCB,DASH,ZEC,COMP,NEO",
                interval: "1d,30d",
                convert: "USD",
                perPage: 100,
                page: 1,
            }
            const results = await axios.get('https://api.nomics.com/v1/currencies/ticker', { params })
            return res.json(results.data);
        } catch (e) {
            return res.json(e)
        }
    },
};