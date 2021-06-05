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
    fetch ('https://app-hrsei-api.herokuapp.com/api/fec2/hr-rpp/reviews/?count=2&product_id=22122', {
      headers: {
        'Authorization': '174f55864f5cb5bae656435a5d6a85ad57d595b4'
      },
    })
      .then((resp) => resp.json())
      .then((reviews) => {
        console.log('reviews', reviews);
        this.setState({reviews: reviews.results}, () => console.log('state', this.state));
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
        </div>
      </div>
    );
  }
}

export default Reviews;