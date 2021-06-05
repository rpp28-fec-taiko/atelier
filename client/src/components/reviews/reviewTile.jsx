import React from 'react';

const ReviewTile = () => {
  return (
    <div className='reviews-tile'>
      <div className='reviews-tile-stars-date'>
        <div className='reviews-tile-stars'>STARS</div>
        <div className='reviews-tile-usernameDate'>USERNAME, DATE</div>
      </div>
      <div>SUMMARY</div>
      <div>BODY</div>
      <div>I RECOMMEND THIS PDT</div>
      <div>RESPONSE</div>
      <div>HELPFUL YES OR NO | REPORT</div>
    </div>
  );
};

export default ReviewTile;