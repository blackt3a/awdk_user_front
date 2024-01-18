import axios from 'axios'

let baseURL = '/api'
if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:19999/api'
}

export default {
    baseURL: baseURL,

    GET: (uri, auth = true, bURL = baseURL) => {
        return new Promise((resolve, reject) => {
            axios.get(bURL + uri, {
                headers: {
                    'Authorization': auth ? localStorage.getItem('token') : ''
                }
            }).then(res => {
                resolve(res.data.data);
            }).catch(err => {
                reject(err);
            });
        })
    },

    POST: (uri, payload = {}, auth = true, bURL = baseURL) => {
        return new Promise((resolve, reject) => {
            axios.post(bURL + uri, payload, {
                headers: {
                    'Authorization': auth ? localStorage.getItem('token') : ''
                }
            }).then(res => {
                resolve(res.data.data);
            }).catch(err => {
                reject(err);
            });
        })
    },

    DELETE: (uri, auth = true, bURL = baseURL) => {
        return new Promise((resolve, reject) => {
            axios.delete(bURL + uri, {
                headers: {
                    'Authorization': auth ? localStorage.getItem('token') : ''
                }
            }).then(res => {
                resolve(res.data.data);
            }).catch(err => {
                reject(err);
            });
        })
    },

    PUT: (uri, payload = {}, auth = true, bURL = baseURL) => {
        return new Promise((resolve, reject) => {
            axios.put(bURL + uri, payload, {
                headers: {
                    'Authorization': auth ? localStorage.getItem('token') : ''
                }
            }).then(res => {
                resolve(res.data.data);
            }).catch(err => {
                reject(err);
            });
        })
    },

    FormatFloat: (number) => {
        return number.toFixed(2)
    },

    FormatGoTime: (timeString) => {
        return new Date(timeString.split('+')[0].replace('T', ' '))
    },

    FormatTime: (timestamp) => {
        return new Date((timestamp + 8 * 3600) * 1000).toJSON().substr(0, 19).replace('T', ' ');
    }
}