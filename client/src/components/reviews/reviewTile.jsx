import React from 'react';
import Stars from '../stars/stars.jsx';

const ReviewTile = ({ review }) => {
  console.log('date', new Date(review.date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }));

  let handleExpandBodyClick = (e) => {
    console.log('e', e);
    let prevSibling = e.target.previousSibling;
    prevSibling.innerText = review.body;
    e.target.innerText = '';
  }

  if (review.body.length > 250) {
    var shortBody = review.body.slice(0, 250);
  } else {
    var shortBody = review.body;
  }

  return (
    <div className='reviews-tile'>
      <div className='reviews-tile-stars-date'>
        <div className='reviews-tile-stars'> <Stars size={24} rating={review.rating}/> </div>
        <div className='reviews-tile-usernameDate'>{review.reviewer_name}, {new Date(review.date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
      </div>
      <div className='reviews-tile-summary'> {review.summary} </div>
      <div className='reviews-tile-body'>
        <div className='reviews-tile-body-short'> {shortBody} </div>

        {review.body.length > 250 ? <div className='reviews-tile-body-expand' onClick={handleExpandBodyClick}> SHOW MORE </div> : null}
      </div>
      {review.recommend ? <div>I RECOMMEND THIS PDT </div> : null}
      {review.response}
      <div>HELPFUL YES OR NO | REPORT</div>
    </div>
  );
};

export default ReviewTile;