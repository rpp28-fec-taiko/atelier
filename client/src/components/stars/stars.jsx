import React from 'react';
import Star from './star.jsx';

const Stars = ({ size, rating }) => {
  let preDefinedStars = [1, 2, 3, 4, 5]
  let ratingIdx = preDefinedStars.indexOf(rating);

  return (
    <div>
      <svg width="0" height="0">
        <defs>
            <linearGradient id="halfGradient">
              <stop offset={"50%"}  stop-color="red" />
              <stop stop-color="white" />
            </linearGradient>
          </defs>
      </svg>
      <svg width="0" height="0">
        <defs>
            <linearGradient id="fullGradient">
              <stop offset={"100%"}  stop-color="red" />
              <stop stop-color="white" />
            </linearGradient>
          </defs>
      </svg>
      {
        preDefinedStars.map((star, idx) => {
          if (idx < ratingIdx) {
            return <Star key={idx} size={size} gradient={"fullGradient"}/>
          }
          if (idx === ratingIdx) {
            return <Star key={idx} size={size} gradient={"fullGradient"}/>
          }

          return <Star key={idx} size={size} />
        })
      }
    </div>
  )
}

export default Stars;