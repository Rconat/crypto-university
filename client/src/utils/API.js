import axios from 'axios'

const fetch = (options) => axios(options);

export default {
    priceTracker: () => fetch({ url: '/api/prices' }),
    syllabus: () => fetch({ url: '/api/syllabus' }),
    createUser: (data) => fetch({ url: '/api/user', method: 'POST', data }),
    getUserById: (userId) => fetch({ url: `/api/user/${userId}` }),
    getUserByEmail: (email) => fetch({ url: `/api/user/email/${email}` }),
    updateUser: (id, payload) => fetch({ url: `/api/user/${id}`, method: 'PUT', data: payload })
}
