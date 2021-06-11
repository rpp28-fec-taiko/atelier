import React from 'react';
import RatingSummary from './ratingSummary.jsx';
import StarBreakdown from './starBreakdown.jsx';

const RatingBreakdown = ({ avgRating, noOfReviews }) => {
  return (
    <div className='reviews-ratings-breakdown'>
      <RatingSummary avgRating={avgRating} noOfReviews={noOfReviews}/>
      <div className='reviews-ratings-breakdown-recommend'>100% of users recommend this pdt</div>
      <StarBreakdown />
    </div>
  );
};

export default RatingBreakdown;