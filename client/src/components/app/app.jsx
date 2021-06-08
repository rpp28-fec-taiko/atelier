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
      currentReviews: [],
      nextReviews: [],
      reviewPage: 1,
      totalReviews: 0,
      avgRating: 0
    };
  }

  get2Reviews = (page) => {
    return fetch (`http://localhost:3000/reviews?page=${this.state.reviewPage}&count=2&productId=${this.state.productId}`)
    .then((resp) => resp.json())
    .then((reviews) => {
      // console.log('reviews', reviews);
      this.setState((prevState) =>  {
        return {
          currentReviews: [...prevState.currentReviews, ...prevState.nextReviews],
          nextReviews: reviews,
          reviewPage: prevState.reviewPage + 1
        }
      }, () => console.log('get2reviews state', this.state));
    })
    .catch((err) => {
      console.log('ERROR GETTING 2 ADDITIONAL REVIEWS', err)
    })
  }

  getInitialReviews = () => {
    return fetch (`http://localhost:3000/reviews?page=${this.state.reviewPage}&count=4&productId=${this.state.productId}`)
    .then((resp) => resp.json())
    .then((reviews) => {
      // console.log('reviews', reviews);
      let currentReviews = reviews.slice(0, 2);
      let nextReviews = reviews.slice(2);
      this.setState((prevState) => {
        return {
          currentReviews,
          nextReviews,
          reviewPage: prevState.reviewPage + 2
        };
      }, () => console.log('initial reviews state', this.state));
    })
    .catch((err) => {
      console.log('ERROR GETTING INITIAL REVIEWS', err)
    })
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

  getAllReviews = () => {
    return fetch(`http://localhost:3000/allReviews?productId=${this.state.productId}`)
    .then((resp) => resp.json())
    .then((allReviews) => {
      // console.log('all reviews', allReviews)
      let ratings = {};
      allReviews.forEach((star) => {
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
      this.setState({
        totalReviews: allReviews.length,
        avgRating
      }, () => console.log('avg review state', this.state))
    })
    .catch((err) => {
      console.log('ERROR GETTING ALL REVIEWS', err);
    })
  }

  componentDidMount () {
    return this.getInitialReviews()
    .then(() => this.getAllReviews());
  }

  render () {
    return (
      <div className='app'>
        <Overview />
        <RelatedItems />
        <QAndA />
        <Reviews currentReviews={this.state.currentReviews} nextReviews={this.state.nextReviews} totalReviews={this.state.totalReviews} increaseReviewHelpfulnesss={this.increaseReviewHelpfulnesss} reportReview={this.reportReview} get2Reviews={this.get2Reviews}/>
      </div>
    );
  }
};

export default App;