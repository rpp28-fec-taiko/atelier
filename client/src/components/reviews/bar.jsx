import React from 'react';

const Bar = ({ star, fill, noOfStarReviews }) => {
  return (
    <div className='bar'>
      <div> {star} stars </div>
      <div className='bar-container'>
        <div className='bar-child' style={{width: `${fill}%`}}>
        </div>
      </div>
      <div className='bar-number'> {noOfStarReviews} </div>
    </div>
  )
}

export default Bar;