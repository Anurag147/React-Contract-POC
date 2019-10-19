import axios from 'axios';

const instance = axios.create({
    baseURL: "https://contractmanagement-b7e21.firebaseio.com/"
});

export default instance;