import React from 'react'
import Stars from '../stars/stars.jsx';

const RatingSummary = ({ noOfReviews, avgRating }) => {
  avgRating = Number(avgRating.toFixed(1));

  return (
    <div className='reviews-ratings-breakdown-summary'>
      <div className='avgRating'> {avgRating} </div>
      <div className='stars'>
        <Stars size={18} rating={avgRating}/>
      </div>
    </div>
  )
}

export default RatingSummary;