import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001/api/v1/'

export const addToCart = (item) => {
  console.log('addToCart', item)
  return axios.post('/line_items/', {
    product_id: item.id,
    cart_id: 1,
    qty: item.qty
  })
};

export const getCart = () => {
  return axios.get('/cart')
};