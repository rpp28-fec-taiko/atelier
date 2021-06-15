import React from 'react';
import Star from './star.jsx';

//rating will be rounded to the nearest single decimal. Eg: 3.75 will become 3.8 & 3.24 will become 3.2. However, 3.8 would still display as 3 quarters full and 1 quarter empty.

const Stars = ({ size, rating }) => {

  let splitRating = rating.toFixed(1).split('.');
  let wholeNum = Number(splitRating[0]);
  let decimalPt = Number(splitRating[1]);
  let fractionRatingNum = wholeNum + 1;
  let preDefinedStars = [1, 2, 3, 4, 5];
  let decimalRating = "zeroGradient";
  // console.log('DECIMAL', decimalPt, 'whole', wholeNum);

  if (decimalPt >= 0 && decimalPt < 2) {
    decimalRating = "zeroGradient"
  } else if (decimalPt >= 2 && decimalPt < 4) {
    decimalRating = "quarterGradient";
  } else if (decimalPt >= 4 && decimalPt < 7) {
    decimalRating = "halfGradient"
  } else if (decimalPt >= 7 && decimalPt < 9) {
    decimalRating = "threeQuarterGradient"
  } else if (decimalPt >= 9 && decimalPt < 10) {
    decimalRating = "fullGradient"
  }

  // console.log('GRADIENT', decimalRating)

  let gradients = preDefinedStars.map((num) => {
    if (num === fractionRatingNum) {
      return decimalRating;
    }
    if (num <= wholeNum) {
      return "fullGradient"
    }
    if(num > wholeNum) {
      return "zeroGradient"
    }
  })

  return (
    <div>
      {
        gradients.map((ratingGradient, idx) => {
          return <Star key={idx} size={size} gradient={ratingGradient} starNumber={idx + 1}/>
        })
      }
    </div>
  )
}

export default Stars;