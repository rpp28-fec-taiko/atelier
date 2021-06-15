import React from 'react';
import Stars from '../stars/stars.jsx';

class AddReview extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      showModal: false,
      selectedStars: 0
    };
  }

  displayModal = () => {
    this.setState((prevState) => {
      return {
        showModal: !prevState.showModal
      }
    })
  }

  starsClicked = (e) => {
    // console.log('starsclicked', e.target.dataset.starnumber)
    this.setState((prevState) => ({
      selectedStars: Number(e.target.dataset.starnumber)
    }))
  }

  render () {
    return (
      <div>
        <button type='button' onClick={this.displayModal}> ADD A REVIEW </button>
        {
          this.state.showModal ?
            <div className='add-review-modal'>
              <div className='add-review-modal-main'>
                <h3> Write Your Review </h3>
                <h4> About Pdt Name  </h4>
                <div className='add-review-rating'>
                  Overall Rating
                  <div onClick={this.starsClicked} style={{display: 'inline'}}>
                    <Stars size={18} rating={this.state.selectedStars} />
                  </div>
                  {
                      ['Poor', 'Fair', 'Average', 'Good', 'Great'][this.state.selectedStars - 1]
                  }
                </div>
                <div> Do you recommend this product? </div>
                <div> Characteristics </div>
                <div> Review summary </div>
                <div> Review body </div>
                <div> Upload your photos </div>
                <div> What is your nickname</div>
                <div>  Your email </div>
                <div> Submit review </div>
                <button type='button' onClick={this.displayModal} style={{cursor: 'pointer'}}>  CLOSE </button>
              </div>
            </div> :
            null
        }
      </div>
    );
  }
};

export default AddReview;
