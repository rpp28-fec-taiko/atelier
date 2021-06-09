import React from 'react';

const ProductInfo = ({product, currentStyle}) => {

  let price;
  if (currentStyle.sale_price) {
    price = <div><span className='sale-price'>${currentStyle.original_price}</span><span className='original-price'>${currentStyle.original_price}</span></div>
  } else {
    price = <div><span className='price'>${currentStyle.original_price}</span></div>
  }

  return (
    <div className='product-info'>
      <div>Star Rating - (read reviews)</div>
      <div className='product-category'>{product.category}</div>
      <div className='product-name'>{product.name}</div>
      {price}
      <div className='product-slogan'>{product.slogan}</div>
      <div className='product-description'>{product.description}</div>
      {/* <img src={require('./images/facebook.svg')} className='social-media-icon'></img> */}
      {/* <img src='images/twitter.png' className='social-media-icon'></img>
      <img src='images/pinterest.png' className='social-media-icon'></img> */}
      <button className='social-media-icon'>Twitter</button>
      <button className='social-media-icon'>Facebook</button>
      <button className='social-media-icon'>Pinterest</button>
    </div>
  )
};

export default ProductInfo;