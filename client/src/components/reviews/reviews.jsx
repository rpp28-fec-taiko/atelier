import React from 'react';
import RatingBreakdown from './ratingBreakdown.jsx';
import PdtBreakdown from './pdtBreakdown.jsx';
import ReviewsList from './reviewsList.jsx';
import Search from './search.jsx';
import AddReview from './addReview.jsx';
import MoreReviews from './moreReviews.jsx';
import Sort from './sort.jsx';

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
            <RatingBreakdown totalReviews={this.props.totalReviews} noOfReviews={this.props.noOfReviews} avgRating={this.props.avgRating}/>
            <PdtBreakdown />
          </div>
          {
            this.props.currentReviews.length === 0 ?
              <AddReview /> :
              <div className='reviews-main'>
                <Sort
                  sortReviews={this.props.sortReviews}
                  reviewCriteria={this.props.reviewCriteria}
                  noOfReviews={this.props.noOfReviews}
                />
                <Search />
                <ReviewsList
                  reviews={this.props.fileredCurrentReviews.length > 0 ? this.props.fileredCurrentReviews: this.props.currentReviews}
                  increaseReviewHelpfulnesss={this.props.increaseReviewHelpfulnesss}
                  reportReview={this.props.reportReview}
                />
                <div className='reviews-btns'>
                  {this.props.nextReviews.length > 0 ? <MoreReviews get2Reviews={this.props.get2Reviews}/> : null}
                  <AddReview />
                </div>
              </div>
          }
        </div>
      </div>
    );
  }
}

export default Reviews;