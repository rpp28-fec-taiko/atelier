import React from 'react';
import ReviewTile from './reviewTile.jsx';

const ReviewsList = ({ reviews, increaseReviewHelpfulnesss, reportReview }) => {
  return (
    <div className='reviews-list'>
      Reviews List
      {
        reviews.map((review, idx) => <ReviewTile key={idx} review={review} increaseReviewHelpfulnesss={increaseReviewHelpfulnesss} reportReview={reportReview}/>)
      }
    </div>
  );
};

export default ReviewsList;