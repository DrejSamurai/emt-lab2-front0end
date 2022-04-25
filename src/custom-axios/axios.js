import axios from "axios";

const instance = axios.create({
    baseURL: 'https://emt-lab-2.herokuapp.com/api',
    headers: {
        'Access-Control-Allow-Origin' : '*'
    }
})

export default instance;