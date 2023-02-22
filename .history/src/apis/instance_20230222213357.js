import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

instance.interceptors.request.use(req => {
  console.log('request', req);
  req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
});

instance.interceptors.response.use(
  res => {
    console.log('response', res);
    return res;
  },
  err => {
    if (axios.isAxiosError(err)) {
      if (err.status === 404) alert('없는 페이지');
    }
  }
);

export default instance;
