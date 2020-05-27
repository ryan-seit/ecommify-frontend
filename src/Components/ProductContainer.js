import React from 'react';
import { useSelector } from 'react-redux';
import ProductCard from './ProductCard';

const ProductContainer = ({ products }) => {

  return (
    <div className="ProductContainer">
      {products.map((product, index) =>
        <ProductCard key={index} product={product} />
      )}
    </div>
  )
}

export default ProductContainer;