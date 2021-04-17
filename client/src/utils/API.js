import axios from 'axios'

const fetch = (options) => axios(options);

export default {
    priceTracker: () => fetch({ url: '/api/prices' }),
    syllabus: () => fetch({ url: '/api/syllabus' })
}
