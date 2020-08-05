import axios from 'axios';

//localhost ios = localhost
//localhost android_studio = 10.0.2.2
//localhost genymotion = 10.0.3.2
const api = axios.create({
    baseUrl: 'http://10.0.2.2:3333';
});

export default api;