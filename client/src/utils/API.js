import axios from "axios";

export default {doSomething: function() {
    return axios.get('/api/dosomething');
}};