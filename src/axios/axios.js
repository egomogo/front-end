import axios from 'axios';

const request = axios.create({ baseURL: 'http://13.125.224.220:8080/api/v1' });

export default request;
