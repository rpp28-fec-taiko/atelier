export let findAvgRating = (reviews) => {
  let ratings = {};
  reviews.forEach((review) => {
    let star = review.rating;
    if (ratings[star] === undefined) {
      ratings[star] = 1;
    } else {
      ratings[star] += 1
    }
  });

  let sumOfStars = 0;
  for (let key in ratings) {
    sumOfStars += ratings[key] * Number(key)
  }
  // console.log('sum', sumOfStars, ratings)
  let avgRating = sumOfStars / reviews.length;
  return avgRating;
}