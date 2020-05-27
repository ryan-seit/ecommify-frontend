import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api/v1/'

export const createUser = () => {
  return axios.post('/users')
};

export const loadUser = (userId) => {
  return axios.get(`/users/${userId}`)
};