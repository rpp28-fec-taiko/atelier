import React from 'react';
import Reviews from '../reviews/reviews.jsx';
import Overview from '../productOverview/Overview.jsx';
import QAndA from '../qAndA/qAndA.jsx';
import RelatedItems from '../relatedItems/RelatedItems.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      productId: '22161',
      totalReviews: [],
      currentReviews: [],
      nextReviews: [],
      reviewCriteria: 'relevant',
      noOfReviews: 0,
      avgRating: 0
    };
  }

  sortReviews = (criteria) => {
    if (criteria === 'newest') {
      let totalReviews = this.state.totalReviews.slice().sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      let idx = this.state.currentReviews.length;
      let currentReviews = totalReviews.slice(0, idx);
      let nextReviews = totalReviews.slice(idx, idx + 2);
      this.setState((prevState) => ({
        totalReviews,
        currentReviews,
        nextReviews,
        reviewCriteria: criteria
      }), () => console.log('sorted', this.state))
    }
  }

  getAllReviews = () => {
    return fetch(`http://localhost:3000/allReviews?productId=${this.state.productId}`)
    .then((resp) => resp.json())
    .then((allReviews) => {
      // console.log('all reviews', allReviews)
      let ratings = {};
      allReviews.forEach((review) => {
        let star = review.rating;
        if (ratings[star] === undefined) {
          ratings[star] = 1;
        } else {
          ratings[star] += 1
        }
      })
      let sumOfStars = 0;
      for (let key in ratings) {
        sumOfStars += ratings[key] * Number(key)
      }
      // console.log('sum', sumOfStars, ratings)
      let avgRating = sumOfStars / allReviews.length;
      //DO SORTING HERE SO THAT INITIAL RESULTS ARE ALSO SORTED
      this.setState({
        totalReviews: allReviews,
        noOfReviews: allReviews.length,
        avgRating,
        currentReviews: allReviews.slice(0, 2),
        nextReviews: allReviews.slice(2, 4)
      }, () => console.log('avg review state', this.state))
    })
    .catch((err) => {
      console.log('ERROR GETTING ALL REVIEWS', err);
    })
  }

  get2Reviews = (page) => {
    let idx = this.state.currentReviews.length + 2;
    let currentReviews = this.state.totalReviews.slice(0, idx);
    let nextReviews = this.state.totalReviews.slice(idx, idx + 2);
    this.setState((prevState) => ({
      currentReviews,
      nextReviews
    }), () => console.log('2 morereviews state', this.state))
  }

  increaseReviewHelpfulnesss = (reviewId) => {
    // console.log('got id', reviewId);
    return fetch (`http://localhost:3000/reviews/${reviewId}/helpful`, {
      method: 'PUT'
    })
    .then(() => {
      // console.log('REVIEW WAS HELPFUL')
      let newCurrentReviews = this.state.currentReviews.map((review) => {
        if (review.review_id === reviewId) {
          return {
            ...review,
            helpfulness: review.helpfulness  + 1
          }
        }
        return review;
      })
      // console.log('new current reviews', newCurrentReviews)
      this.setState((prevState) => {
        return {
          ...prevState,
          currentReviews: [...newCurrentReviews]
        }
      }, () => console.log('helpful state', this.state))
    })
    .catch((err) => {
      console.log('ERROR SUBMITTING HELPFULNESS', err)
    })
  }

  reportReview = (reviewId) => {
    return fetch (`http://localhost:3000/reviews/${reviewId}/report`, {
      method: 'PUT'
    })
    .then(() => {
      console.log('REVIEW REPORTED');
      // return this.getInitialReviews();
    })
    .catch((err) => {
      console.log('ERROR REPORTING REVIEW', err)
    })

  }

  componentDidMount () {
    this.getAllReviews();
  }

  render () {
    return (
      <div className='app'>
        <Overview />
        <RelatedItems />
        <QAndA />
        <Reviews currentReviews={this.state.currentReviews} nextReviews={this.state.nextReviews} noOfReviews={this.state.noOfReviews} increaseReviewHelpfulnesss={this.increaseReviewHelpfulnesss} reportReview={this.reportReview} get2Reviews={this.get2Reviews} sortReviews={this.sortReviews} reviewCriteria={this.state.reviewCriteria}/>
      </div>
    );
  }
};

export default App;