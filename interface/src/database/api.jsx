import axios from 'axios'

const api = axios.create({
    baseURL: 'https://ebook-production.up.railway.app',
  });
  
  export default api;