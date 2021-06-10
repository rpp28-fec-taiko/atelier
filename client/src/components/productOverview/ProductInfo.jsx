import React from 'react';
import Stars from '../stars/stars.jsx';

const ProductInfo = ({product, currentStyle, noOfReviews, avgRating}) => {

  let stars = <Stars size={18} rating={avgRating}/>

  let price;
  if (currentStyle.sale_price) {
    price = <div><span className='sale-price'>${currentStyle.sale_price}</span><span className='original-price'>${currentStyle.original_price}</span></div>
  } else {
    price = <div><span className='price'>${currentStyle.original_price}</span></div>
  }

  return (
    <div className='product-info'>
      <div className='overview-stars'>{stars}</div>
      <span className='read-reviews'>Read {noOfReviews} reviews</span>
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