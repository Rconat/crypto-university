import axios from 'axios'

const fetch = (options) => axios(options);

export default {
    priceTracker: () => fetch({ url: '/api/prices' }),
    createUser: (data) => fetch({ url: '/api/user', method: 'POST', data }),
    syllabus: () => fetch({ url: '/api/syllabus' }),
    getUserById: (userId) => fetch({ url: `/api/user/${userId}` }),
    checkUserEducation: (userId) => fetch({ url: `/api/user/education/${userId}` }),
    getUserByEmail: (email) => fetch({ url: `/api/user/email/${email}` }),
    updateUser: (id, payload) => fetch({ url: `/api/user/${id}`, method: 'PUT', data: payload }),
    getQuizById: (quizid) => fetch({ url: `/api/syllabus/${quizid}` }),
}
