import * as types from './types';

const initialState = {
  items: [],
  subtotal: 0,
  total: 0
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
      let newItemsArr = state.items.filter(item => item.id != action.payload.id);
      return {
        ...state,
        items: newItemsArr,
        subtotal: state.subtotal -= action.payload.price
      }
    default: {
      return state;
    }
  }
}

export default reducer;