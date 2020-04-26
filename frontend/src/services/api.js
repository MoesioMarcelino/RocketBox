import axios from 'axios';

const api = axios.create({
    baseURL: 'http://omnistackbackend-moesio.herokuapp.com',
});

export default api;