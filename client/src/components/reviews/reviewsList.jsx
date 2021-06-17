import React from 'react';
import ReviewsTile from './reviewsTile.jsx';

const ReviewsList = ({ reviews, increaseReviewHelpfulnesss, reportReview, helpfulReviews }) => {
  return (
    <div className='reviews-list'>
      Reviews List
      {
        reviews.map((review, idx) => <ReviewsTile key={idx} review={review} helpfulReviews={helpfulReviews} increaseReviewHelpfulnesss={increaseReviewHelpfulnesss} reportReview={reportReview}/>)
      }
    </div>
  );
};

export default ReviewsList;