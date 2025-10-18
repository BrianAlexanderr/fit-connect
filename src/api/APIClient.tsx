import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.EXPO_PUBLIC_BASE_URL, // ganti sesuai backend kamu
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;

