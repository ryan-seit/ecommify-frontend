import { getProducts, getProduct } from '../api/Products';
import { addToCart, getCart } from '../api/Cart';
import * as types from './types';
// import Cart from '../Components/Cart';

// load all products
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

// load single product
export const loadProduct = product => dispatch => {
  // console.log('action loadProduct:', product)
  dispatch({ type: types.LOAD_PRODUCT_LOADING });
  getProduct(product)
  .then(
    product => dispatch({ type: types.LOAD_PRODUCT_SUCCESS, payload: product.data }),
    err => dispatch({ type: types.LOAD_PRODUCT_ERROR, error: err.message })
  )
};

// add item to cart
export const loadAddToCart = item => {
  console.log('actions loadAddToCart', item)
  return { type: types.ADD_ITEM, payload: item }
};

// load cart items
export const loadCart = () => dispatch => {
  console.log('actions loadCart')
  dispatch({ type: types.LOAD_CART_LOADING });
  getCart()
  .then(
    // cartItemArray => console.log('loadCart', cartItemArray),
    cartItemArray => dispatch({ type: types.LOAD_CART_SUCCESS, payload: cartItemArray.data }),
    err => dispatch ({ type: types.LOAD_CART_ERROR, error: err.message })
  )
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
};

export const filterProducts = category => dispatch => {
  dispatch({ type: types.FILTER_PRODUCTS, payload: category })
};

// set state to signup user info
// persist user to API

// export const createAccount = (account) => ({
//   type: types.CREATE_ACCOUNT,
//   payload: account
// })