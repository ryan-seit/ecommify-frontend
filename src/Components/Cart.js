import React from 'react';
// import axios from 'axios';
// import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CartLineItem from './CartLineItem';

const Cart = ({ cart, subtotal }) => {
  console.log('cart props:', cart)

  return (
    <>
      <div className="cart__title">Your Cart</div>
      <div className="cart">
        
        {cart.map((lineItem, index) =>
          <CartLineItem key={index} lineItem={lineItem} />
        )}
        <div className="cart__bottom">
          <div className="cart__bottom-subtotal">Subtotal: ${subtotal}</div>
          
          <Link className="cart__bottom-button" to="Checkout">Continue</Link>
        </div>
        
      </div>
    </>
  )
};

export default Cart;