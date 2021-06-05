import React from 'react';
import RatingsBreakdown from './ratingsBreakdown.jsx';
import PdtBreakdown from './pdtBreakdown.jsx';
import ReviewsList from './reviewsList.jsx';
import Search from './search.jsx';

class Reviews extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      reviews: []
    };
  }

  componentDidMount () {
    fetch (`http://localhost:3000/reviews?count=2&productId=22122`)
      .then((resp) => resp.json())
      .then((reviews) => {
        console.log('reviews', reviews);
        this.setState({reviews}, () => console.log('state', this.state));
      });
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
            this.state.reviews.length === 0 ?
              <div> ADD A REVIEW </div> :
              <div className='reviews-main'>
                <div className='reviews-sort'>
                  No. of reviews, sorted by dropdown
                </div>
                <Search />
                <ReviewsList reviews={this.state.reviews}/>
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