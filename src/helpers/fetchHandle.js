import axios from 'axios';

const token = localStorage.getItem('token');

export default axios.create({
  baseURL: `${process.env.API_BASE_URL}`,
  headers: {
    Accepted: 'appication/json',
    'Content-Type': 'application/json',
    Authorization: token || localStorage.token,
  },
});
