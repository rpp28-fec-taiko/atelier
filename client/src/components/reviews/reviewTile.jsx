import React from 'react';
import Stars from '../stars/stars.jsx';

const ReviewTile = ({ review }) => {
  return (
    <div className='reviews-tile'>
      <div className='reviews-tile-stars-date'>
        <div className='reviews-tile-stars'>STARS {review.rating} <Stars size={40} rating={2}/></div>
        <div className='reviews-tile-usernameDate'>{review.reviewer_name} , {review.date}</div>
      </div>
      <div>SUMMARY {review.summary}</div>
      <div>BODY {review.body}</div>
      {review.recommend ? <div>I RECOMMEND THIS PDT </div> : null}
      {review.response}
      <div>HELPFUL YES OR NO | REPORT</div>
    </div>
  );
};

export default ReviewTile;