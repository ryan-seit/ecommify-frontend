import * as types from './types';

const initialState = {
  items: [],
  subtotal: 0,
  total: 0,
  loading: false,
  error: ''
}

const reducer = (state = initialState, action) => {
  // console.log("cartReducer action", action)
  switch (action.type) {
    case types.ADD_ITEM:
      return {
        ...state, 
        items: [...state.items, action.payload],
        subtotal: state.subtotal += action.payload.price
      }
    case types.REMOVE_ITEM:
      let newItemsArr = state.items.filter(item => item.id !== action.payload.id);
      return {
        ...state,
        items: newItemsArr,
        subtotal: state.subtotal -= action.payload.price
      }
    case types.LOAD_CART_LOADING:           
      return {               
        ...state,               
        loading: true,               
        error:''           
      };          
    case types.LOAD_CART_SUCCESS:           
      return {               
        ...state,               
        items: action.payload.data,               
        loading: false           
      }              
    case types.LOAD_CART_ERROR:           
      return {               
        ...state,               
          loading: false,               
          error: action.error           
      }
    default: {
      return state;
    }
  }
}

export default reducer;