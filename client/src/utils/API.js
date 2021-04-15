import axios from 'axios'

const fetch = (options) => axios(options);

export default {
    priceTracker: () => axios({ url: '/api/prices' })
}
