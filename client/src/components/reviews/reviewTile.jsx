import React from 'react';

const ReviewTile = ({ review }) => {
  return (
    <div className='reviews-tile'>
      <div className='reviews-tile-stars-date'>
        <div className='reviews-tile-stars'>STARS {review.rating}</div>
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