import axios from "axios";



const csrfToken = document.querySelector('meta[name="csrf-token"]');

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  timeout: 50000,
  headers: {"Access-Control-Allow-Origin": "*"},
  
});


api.interceptors.request.use(
  (config) => {

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
