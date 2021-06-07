import React from 'react';

const ProductInfo = ({product}) => (
  <div className='product-info'>
    <div>Star Rating - (read reviews)</div>
    <div className='product-category'>{product.category}</div>
    <div className='product-name'>{product.name}</div>
    <div className='product-price'>${product.default_price}</div>
    <div className='product-slogan'>{product.slogan}</div>
    <div className='product-description'>{product.description}</div>
    <div className='social-media'>Social Media Icons</div>
  </div>
);

export default ProductInfo;