import React from 'react';
import ReviewTile from './reviewTile.jsx';

const ReviewsList = ({ reviews }) => {
  return (
    <div className='reviews-list'>
      Reviews List
      {
        reviews.map((review, idx) => <ReviewTile key={idx} review={review}/>)
      }
    </div>
  );
};

export default ReviewsList;