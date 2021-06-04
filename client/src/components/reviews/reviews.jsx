import React from 'react';

class Reviews extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='reviews-main'>
        <h2>RATINGS & REVIEWS</h2>
        <div className='reviews-body'>
          <div> ONE </div>
          <div> TWO </div>
        </div>
      </div>
    );
  }
}

export default Reviews;