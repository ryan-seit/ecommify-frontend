import React from 'react';
import { loadAddToCart } from '../store/actions';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const ProductCard = ({ product }) => {

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    // console.log(item, "added to cart")
    dispatch(loadAddToCart(product));
  }
  
  return (
    <div className="ProductCard" id={product.id}>
      <Link to={`/products/${product.id}`}>
        <img className="Image" src={product.img_1} alt={product.name} />
      </Link>
      <div className="product-card--details">
        <div className="product-card--details--name">{product.name.toUpperCase()}</div>
        {/* <div className="product-card--details--category">{product.category}</div> */}
        <div className="product-card--details--bottom">
          <div className="product-card--details--bottom--price">${product.price}</div>
          <div className="product-card--details--bottom--addtocart">
            <div className="product-card--details--bottom--addtocart--button" onClick={() => handleAddToCart(product)}>+</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard;