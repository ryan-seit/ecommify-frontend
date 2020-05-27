import * as types from './types';

const initialState = {
  currentUser: null,
  fullname: '',
  email: '',
  password: '',
  password_confirmation: '',
  errors: ''
}

const reducer = (state = initialState, action) => {
  // console.log("userReducer action", action)
  switch (action.type) {
    case types.CREATE_ACCOUNT:
      return {
        ...state,
        fullname: state.fullname,
        email: state.email,
        password: state.password
      }
    case types.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload
      }
    default: 
      return state
  }
}

export default reducer;