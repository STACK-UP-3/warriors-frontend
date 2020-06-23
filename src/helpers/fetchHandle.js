import axios from 'axios';

const tokenString = localStorage.getItem('token');
const token = JSON.parse(tokenString);

export default axios.create({
  baseURL: `${process.env.API_BASE_URL}`,
  headers: {
    Accepted: 'appication/json',
    'Content-Type': 'application/json',
    Authorization: token || localStorage.token,
  },
});
