import { getProducts, getProduct } from '../api/Products';
import { addToCart } from '../api/Cart';
import * as types from './types';
import Cart from '../Components/Cart';

export const loadProducts = () => dispatch => {
  // console.log('loadProducts')
  dispatch({ type: types.LOAD_PRODUCTS_LOADING });
  getProducts()
  .then(
    products => 
    dispatch({ type: types.LOAD_PRODUCTS_SUCCESS, payload: products.data }),
    err => dispatch({ type: types.LOAD_PRODUCTS_ERROR, error: err.message })
  )
};

export const loadProduct = product => dispatch => {
  // console.log('action loadProduct:', product)
  dispatch({ type: types.LOAD_PRODUCT_LOADING });
  getProduct(product)
  .then(
    product => dispatch({ type: types.LOAD_PRODUCT_SUCCESS, payload: product.data }),
    err => dispatch({ type: types.LOAD_PRODUCT_ERROR, error: err.message })
  )
};

export const loadAddToCart = item => {
  // console.log('actions loadAddToCart', item.data)
  return { type: types.ADD_ITEM, payload: item }
};

// export const loadAddToCart = item => dispatch => {
//   console.log('action addToCart:', item)
//   dispatch({ type: types.ADD_ITEM_LOADING });
//   addToCart(item)
//   .then(
//     item => dispatch({ type: types.ADD_ITEM_SUCCESS, payload: item}),
//     err => dispatch({ type: types.ADD_ITEM_ERROR, error: err.message })
//   )
// };

export const removeFromCart = item => {
  return { type: types.REMOVE_ITEM, payload: item }
};

export const setCurrentUser = user => dispatch => {
  dispatch({ type: types.SET_CURRENT_USER, payload: user })
}

// set state to signup user info
// persist user to API

// export const createAccount = (account) => ({
//   type: types.CREATE_ACCOUNT,
//   payload: account
// })