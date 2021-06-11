import { findAvgRating, sortByCriteria } from '../../helper/reviewsHelper.js';

describe ('Reviews Helper Fns', () => {
  let dummyReviews = [
    {
      "rating": 4,
      "date": "2020-1-26T00:00:00.000Z",
      "helpfulness": 37
    },
    {
      "rating": 3,
      "date": "2020-2-26T00:00:00.000Z",
      "helpfulness": 21
    },
    {
      "rating": 5,
      "date": "2020-9-26T00:00:00.000Z",
      "helpfulness": 33
    },
    {
      "rating": 3,
      "date": "2020-10-26T00:00:00.000Z",
      "helpfulness": 9
    },
    {
      "rating": 3,
      "date": "2020-11-26T00:00:00.000Z",
      "helpfulness": 19
    },
  ]

  describe('findAvgRating', () => {
    it('should return a number', () => {
      expect(typeof findAvgRating(dummyReviews)).toBe('number');
    });

    it('should return an average of the ratings provided', () => {
      expect(findAvgRating(dummyReviews)).toEqual(3.6)
    });
  })

  describe('sortByCriteria', () => {
    it('should return an array', () => {
      expect(Array.isArray(sortByCriteria('helpful', dummyReviews))).toBe(true);
    });

    it('should add a rank property to all items in the list if the criteria is "relevant"', () => {
      let result = sortByCriteria('relevant', dummyReviews);
      result.forEach((item) => {
        expect(item.rank).toBeTruthy()
      })
    });
  })

});