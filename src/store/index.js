import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import productReducer from './productReducer';
import userReducer from './userReducer';
import cartReducer from './cartReducer';

const rootReducer = combineReducers({
  user: userReducer,
  product: productReducer,
  cart: cartReducer,
  form: formReducer
})

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store; 