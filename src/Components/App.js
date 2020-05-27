import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

import { loadProducts } from '../store/actions';
import NavBar from './NavBar';
import Cart from './Cart';
import Signup from './Signup';
import Login from './Login';
import Account from './Account';
import FeatureContainer from './FeatureContainer';
import ProductContainer from './ProductContainer';
import FooterContainer from './FooterContainer';
import ProductPage from './ProductPage';
import Checkout from './Checkout';
import { setCurrentUser } from '../store/actions';

function App() {

  // set axios withCredentials to true
  axios.defaults.withCredentials = true;

  const dispatch = useDispatch();
  const products = useSelector(state => state.product.items)
  const cart = useSelector(state => state.cart.items)
  const subtotal = useSelector(state => state.cart.subtotal)
  const currentUser = useSelector(state => state.user.currentUser)

  const handleSession = () => {
    axios.get('http://localhost:3001/api/v1/autologin')
    .then(response => {
      return dispatch(setCurrentUser(response.data));
    })
  }
  useEffect(() => {
    dispatch(loadProducts());
    handleSession();
  }, []);

  return (
    <div className="App">
      <NavBar currentUser={currentUser}/>
      <main>
        <Switch>
          <Route exact path="/" render={(routeProps) => <FeatureContainer {...routeProps} products={products} />}/>
          <Route exact path="/users/:id" component={Account} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" render={(routeProps) => <Login {...routeProps}/>} />
          <Route exact path="/cart" render={(routeProps) => <Cart {...routeProps} cart={cart} subtotal={subtotal} />} />
          <Route exact path="/checkout" render={(routeProps) => <Checkout {...routeProps} cart={cart} subtotal={subtotal} />} />
          <Route exact path="/products/all" render={(routeProps) => <ProductContainer {...routeProps} products={products} />} />
          <Route path="/products/:id" render={(routeProps) => <ProductPage {...routeProps} />} />
        </Switch>
      </main>
      <FooterContainer />
    </div>
  )
};

export default App;