import React from 'react';
import Reviews from '../reviews/reviews.jsx';
import Overview from '../productOverview/Overview.jsx';
import QAndA from '../qAndA/qAndA.jsx';
import RelatedItems from '../relatedItems/RelatedItems.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      productId: '22169',
      reviews: []
    };
  }

  getInitialReviews = () => {
    return fetch (`http://localhost:3000/reviews?count=5&productId=${this.state.productId}`)
    .then((resp) => resp.json())
    .then((reviews) => {
      // console.log('reviews', reviews);
      this.setState({reviews}, () => console.log('state', this.state));
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
        <Reviews reviews={this.state.reviews} increaseReviewHelpfulnesss={this.increaseReviewHelpfulnesss} reportReview={this.reportReview}/>
      </div>
    );
  }
};

export default App;