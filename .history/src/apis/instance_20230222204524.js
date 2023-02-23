import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

instance.interceptors.request.use(req => {
  req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
});

instance.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    if (axios.isAxiosError(err)) {
      if (err.status === 404) alert('없는 페이지');
    }
  }
);
