import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://hamburgueria-kenzie-v2.herokuapp.com',
  timeout: 50000,
  headers: {
    'Content-Type': 'application/json',
  },
});
