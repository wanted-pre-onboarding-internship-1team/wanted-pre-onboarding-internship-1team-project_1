import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

instance.interceptors.request.use(req => {
  req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
});
