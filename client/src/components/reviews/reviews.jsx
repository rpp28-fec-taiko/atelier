import React from 'react';
import RatingsBreakdown from './ratingsBreakdown.jsx';
import PdtBreakdown from './pdtBreakdown.jsx';
import ReviewsList from './reviewsList.jsx';
import Search from './search.jsx';

class Reviews extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='reviews'>
        <h2>RATINGS & REVIEWS</h2>
        <div className='reviews-body'>
          <div className='reviews-breakdown'>
            <RatingsBreakdown />
            <PdtBreakdown />
          </div>
          {
            this.props.reviews.length === 0 ?
              <div> ADD A REVIEW </div> :
              <div className='reviews-main'>
                <div className='reviews-sort'>
                  No. of reviews, sorted by dropdown
                </div>
                <Search />
                <ReviewsList reviews={this.props.reviews} increaseReviewHelpfulnesss={this.props.increaseReviewHelpfulnesss}/>
                <div className='reviews-btns'>
                  BUTTONS
                </div>
              </div>
          }
        </div>
      </div>
    );
  }
}

export default Reviews;