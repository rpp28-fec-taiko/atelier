import React from 'react';
import Stars from '../stars/stars.jsx';

const ReviewTile = ({ review }) => {
  console.log('date', new Date(review.date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));
  return (
    <div className='reviews-tile'>
      <div className='reviews-tile-stars-date'>
        <div className='reviews-tile-stars'> <Stars size={40} rating={4.39}/> </div>
        <div className='reviews-tile-usernameDate'>{review.reviewer_name}, {new Date(review.date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
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