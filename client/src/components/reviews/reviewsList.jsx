import React from 'react';
import ReviewsTile from './reviewsTile.jsx';

const ReviewsList = ({ reviews, increaseReviewHelpfulnesss, reportReview }) => {
  return (
    <div className='reviews-list'>
      Reviews List
      {
        reviews.map((review, idx) => <ReviewsTile key={idx} review={review} increaseReviewHelpfulnesss={increaseReviewHelpfulnesss} reportReview={reportReview}/>)
      }
    </div>
  );
};

export default ReviewsList;