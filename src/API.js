import axios from 'axios';

export const dataUrl = `https://jsonplaceholder.typicode.com/`;

const headers = {
  'Content-Type': 'application/json; charset=UTF-8',
};

const API = axios.create({
  baseURL: dataUrl,
  headers,
});

API.interceptors.request.use(config => config, error => Promise.reject(error));

export default API;
