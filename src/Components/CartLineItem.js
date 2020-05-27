import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../store/actions';

const CartLineItem = ({ lineItem }) => {
  
  const dispatch = useDispatch();
  const item = useSelector(state => state.cart.items.find(el => el.id === lineItem.id));

  const handleRemove = e => {
    dispatch(removeFromCart(e));
  };

  return (
    <div className="cartLineItem" id={item.id}>
      <img src={item.img_1} alt={item.name} />
      <div className="cartLineItem__detail">
        <div className="cartLineItem__detail__name">{item.name}</div>
        <div className="cartLineItem__detail__price">${item.price}</div>
      </div>
        <div className="cartLineItem__remove" onClick={() => handleRemove(item)}><i class="fas fa-trash"></i></div>
    </div>
  );
};

export default CartLineItem;