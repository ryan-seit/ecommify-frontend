// import { LOAD_PRODUCTS_ERROR, LOAD_PRODUCTS_LOADING, LOAD_PRODUCTS_SUCCESS } from "./actions";
import * as types from './types';

const initialState = {
  searchTerm: '',
  startIndex: 0,
  loading: true,
  items: [],
  error: '',
  item: null
}

const reducer = (state = initialState, action) => {
  // console.log("Products reducer", action)
  switch (action.type) {       
    case types.LOAD_PRODUCTS_LOADING:           
      return {               
        ...state,               
        loading: true,               
        error:''           
      };          
    case types.LOAD_PRODUCTS_SUCCESS:           
      return {               
        ...state,               
        items: action.payload.data,               
        loading: false           
      }              
    case types.LOAD_PRODUCTS_ERROR:           
      return {               
        ...state,               
          loading: false,               
          error: action.error           
      }
      case types.LOAD_PRODUCT_LOADING:           
      return {               
        ...state,               
        loading: true,               
        error:''           
      }          
    case types.LOAD_PRODUCT_SUCCESS:       
      return {               
        ...state,               
        item: action.payload.data,               
        loading: false           
      }              
    case types.LOAD_PRODUCT_ERROR:           
      return {               
        ...state,               
          loading: false,               
          error: action.error           
      }      
    case types.SET_SEARCHTERM:
      return {...state, searchTerm: action.payload}   
    default:            
      return state;         
  }
}

export default reducer;