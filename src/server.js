import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burguer-app-7ae21.firebaseio.com',
});

export default instance;
