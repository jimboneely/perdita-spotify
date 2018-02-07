import axios from "axios";

export default {
    login: () => {
        return axios.get('/api/user/login');
    }
};