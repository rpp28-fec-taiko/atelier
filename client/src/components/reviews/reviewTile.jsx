import React from 'react';
import Stars from '../stars/stars.jsx';
import Modal from './modal.jsx';

class ReviewTile extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      showModal: false,
      url: ''
    }
  }

  handleExpandBodyClick = (e) => {
    // console.log('e', e);
    let prevSibling = e.target.previousSibling;
    prevSibling.innerText = this.props.review.body;
    e.target.innerText = '';
  }

  displayModal = (url) => {
    this.setState({
      showModal: true,
      url
    })
  }

  hideModal = () => {
    this.setState({showModal: false})
  }

  render () {
    let {review_id, rating, summary, recommend, response, body, date, reviewer_name, helpfulness, photos } = this.props.review;
    console.log('date', new Date(date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }), photos);

    if (body.length > 250) {
      var shortBody = body.slice(0, 250);
    } else {
      var shortBody = body;
    }

    return (
      <div className='reviews-tile'>
        <div className='reviews-tile-stars-date'>
          <div className='reviews-tile-stars'> <Stars size={24} rating={rating}/> </div>
          <div className='reviews-tile-usernameDate'>{reviewer_name}, {new Date(date).toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
        </div>
        <div className='reviews-tile-summary'> {summary} </div>
        <div className='reviews-tile-body'>
          <div className='reviews-tile-body-short'> {shortBody} </div>
          {body.length > 250 ? <div className='reviews-tile-body-expand' onClick={this.handleExpandBodyClick}> SHOW MORE </div> : null}
          <div className='reviews-tile-body-images'>
            {
              photos.length === 0
                ? null
                : photos.map((photo) => <img key={photo.id} src={photo.url} height='60px' width='60px' onClick={() => this.displayModal(photo.url)}/>)
            }
          </div>
          {
            this.state.showModal ? <Modal url={this.state.url} hideModal={this.hideModal}/> : null
          }
        </div>
        {recommend ? <div>I RECOMMEND THIS PDT </div> : null}
        {response}
        <div>HELPFUL YES OR NO | REPORT</div>
      </div>
    );
  }
};

export default ReviewTile;