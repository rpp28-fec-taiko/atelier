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

export let sortByCriteria = (criteria, list) => {
  if (criteria === 'newest') {
    let totalReviews = list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return totalReviews;
  }

  if (criteria === 'helpful') {
    let totalReviews = list.sort((a, b) => b.helpfulness - a.helpfulness);
    return totalReviews;
  }

  if (criteria === 'relevant') {
    //Higher the rank of a review, higher up the list that item will be.
    let sortMapByDate = list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).map((review, idx, list) => {
      let dateRank = list.length - idx;
      return {
        ...review,
        dateRank
      }
    });

    let sortMapByHelp = sortMapByDate.sort((a, b) => b.helpfulness - a.helpfulness).map((review, idx, list) => {
      let helpRank = list.length - idx;
      return {
        ...review,
        helpRank
      }
    });

    let totalReviews = sortMapByHelp.map((review) => {
      let rank = (review.helpRank + review.dateRank) / 2;
      return {
        ...review,
        rank
      }
    })
    .sort((a, b) => b.rank - a.rank)
    return totalReviews;
  }
}