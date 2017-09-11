import axios from 'axios'

const baseUrl = 'http://localhost:8081/'
export default {
    getInfo(url) {
        return axios.get(baseUrl + url)
    },

    postInfo(url, data = {}) {
        return axios.post(baseUrl + url, data)
    }
}