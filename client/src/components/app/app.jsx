import React from 'react';
import Reviews from '../reviews/reviews.jsx';
import Overview from '../productOverview/Overview.jsx';
import QAndA from '../qAndA/qAndA.jsx';
import RelatedItems from '../relatedItems/RelatedItems.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      productId: '22126',
      currentReviews: [],
      nextReviews: [],
      fetchMore: false,
      reviewPage: 1
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
      }, () => console.log('state', this.state));
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
      }, () => console.log('state', this.state));
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
      return this.getInitialReviews();
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
    this.getInitialReviews();
  }

  render () {
    return (
      <div className='app'>
        <Overview />
        <RelatedItems />
        <QAndA />
        <Reviews currentReviews={this.state.currentReviews} nextReviews={this.state.nextReviews} increaseReviewHelpfulnesss={this.increaseReviewHelpfulnesss} reportReview={this.reportReview} get2Reviews={this.get2Reviews}/>
      </div>
    );
  }
};

export default App;