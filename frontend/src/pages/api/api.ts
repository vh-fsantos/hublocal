import axios from 'axios';
import store from '../../store';


const api = axios.create({
  baseURL: 'http://localhost:8000/',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

function addAuthToken(config: any) {
    const { accessToken } = store.getState().auth;
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
}
  
// api.interceptors.request.use(addAuthToken);

export default api;