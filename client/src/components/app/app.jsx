import React from 'react';
import Reviews from '../reviews/reviews.jsx';
import Overview from '../productOverview/Overview.jsx';
import QAndA from '../qAndA/qAndA.jsx';
import RelatedItems from '../relatedItems/RelatedItems.jsx';
import {findAvgRating, sortByCriteria} from '../reviews/reviewsHelper.js';

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
    let totalReviews = sortByCriteria(criteria, this.state.totalReviews.slice());
    let currentReviews = totalReviews.slice(0, 2);
    let nextReviews = totalReviews.slice(2, 4);
    this.setState((prevState) => ({
      totalReviews,
      currentReviews,
      nextReviews,
      reviewCriteria: criteria
    }), () => console.log(`state sorted by ${criteria}`, this.state))
  }

  getAllReviews = () => {
    return fetch(`http://localhost:3000/allReviews?productId=${this.state.productId}`)
    .then((resp) => resp.json())
    .then((allReviews) => {
      // console.log('all reviews', allReviews)
      let avgRating = findAvgRating(allReviews);
      let totalReviews = sortByCriteria(this.state.reviewCriteria, allReviews)
      //DO SORTING HERE SO THAT INITIAL RESULTS ARE ALSO SORTED
      this.setState({
        totalReviews,
        noOfReviews: totalReviews.length,
        avgRating,
        currentReviews: totalReviews.slice(0, 2),
        nextReviews: totalReviews.slice(2, 4)
      }, () => console.log('state after fetching all reviews', this.state))
    })
    .catch((err) => {
      console.log('ERROR GETTING ALL REVIEWS', err);
    })
  }

  get2Reviews = () => {
    let idx = this.state.currentReviews.length + 2;
    let currentReviews = this.state.totalReviews.slice(0, idx);
    let nextReviews = this.state.totalReviews.slice(idx, idx + 2);
    this.setState((prevState) => ({
      currentReviews,
      nextReviews
    }), () => console.log('state after getting 2 more reviews', this.state))
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
        <Overview productId={this.state.productId} avgRating={this.state.avgRating} noOfReviews={this.state.noOfReviews}/>
        <RelatedItems />
        <QAndA productId={this.state.productId}/>
        <Reviews currentReviews={this.state.currentReviews} nextReviews={this.state.nextReviews} noOfReviews={this.state.noOfReviews} increaseReviewHelpfulnesss={this.increaseReviewHelpfulnesss} reportReview={this.reportReview} get2Reviews={this.get2Reviews} sortReviews={this.sortReviews} reviewCriteria={this.state.reviewCriteria}/>
      </div>
    );
  }
};

export default App;