import React, { useEffect } from 'react';
import { loadProduct } from '../store/actions';
import { loadAddToCart } from '../store/actions';
import { useSelector, useDispatch } from 'react-redux';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const ProductPage = (props) => {

  const dispatch = useDispatch();

  const productId = props.match.params.id

  useEffect(() => {
    dispatch(loadProduct(productId))
  }, []);

  const product = useSelector(state => state.product.item)
  const loading = useSelector(state => state.product.loading)

  
  const handleAddToCart = (product) => {
    dispatch(loadAddToCart(product));
  }
  
  const renderProductPage = () => {
    if(!product || loading) {
      // console.log("Product loading...")
    } else {
      return (
        <div className="product-page">
          <div className="product-page--title">{product.category}</div>
          <Carousel showArrows={true} showThumbs={false} showStatus={false}>
            <div>
              <img src={product.img_1} alt={product.name} />
            </div>
            <div>
              <img src={product.img_2} alt={product.name} />
            </div>
          </Carousel>
          
          <div className="product-page--details">
            <div className="product-page--details--name">{product.name}</div>
            <div className="product-page--details--price">${product.price}</div>
            <button onClick={() => handleAddToCart(product)}>Add to cart</button>
            <div className="product-page--details--description">{product.description}</div>
          </div>
        </div>
      )
    }
  }

  return (
    <>
      {renderProductPage()}
    </>
  )
};

export default ProductPage;