import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://192.168.0.70:3000/api/', // ganti sesuai backend kamu
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;

