import axios from 'axios'

export default {
    login: () => {
        return axios.get('/user/login');
    }
}