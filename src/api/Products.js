import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api/v1/'

export const getProducts = () => {
  return axios.get('/products')
};

export const getProduct = (productId) => {
  return axios.get(`/products/${productId}`)
};