import React from 'react'
import Bar from './bar.jsx';

const StarBreakdown = ({ totalReviews, noOfReviews }) => {
  let stars = [5, 4, 3, 2, 1];

  return (
    <div className='reviews-ratings-breakdown-star'>
      <h3> Rating Breakdown </h3>
      {
        stars.map((star, idx) => {
          let filteredReviews = totalReviews.filter((review) => review.rating === star)
          let fillPercentage = Math.round((filteredReviews.length / totalReviews.length) * 100)
          return <Bar key={idx} star={star} noOfStarReviews={filteredReviews.length} fill={fillPercentage}/>
        })
      }
    </div>
  )
}

export default StarBreakdown;