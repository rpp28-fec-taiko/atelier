import React from 'react';
import Stars from '../stars/stars.jsx';
import SelectCharacteristic from './selectCharacteristic.jsx';

class AddReview extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      productInfo: {},
      showModal: false,
      selectedStars: 0,
      recommended: '',
      characteristics: {}
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

  onRecommendChange = (e) => {
    // console.log('e', e);
    this.setState((prevState) => ({
      recommended: e.target.value
    }), () => console.log('state rec', this.state))
  }

  onInputChange = (e, id, name) => {
    // console.log('e', e.target.value);
    this.setState((prevState) => ({
      characteristics: {
        ...prevState.characteristics,
        [id]: e.target.value
      }
    }), () => console.log('After chngin', this.state))
  }

  componentDidMount () {
    return fetch(`http://localhost:3000/productInfo?productId=${this.props.productId}`)
    .then((resp) => resp.json())
    .then((productInfo) => {
      this.setState({ productInfo }, () => console.log('PDT INFO', this.state));
    })
    .catch(() => {
      console.log('Error fetching product info from server');
    });
  }

  render () {
    let { characteristics } = this.props;
    let characteristicNames = [];
    for (let key in characteristics) {
      characteristics[key].name = key;
      characteristics[key].value = '';
      characteristicNames.push(characteristics[key]);
    }
    // console.log('names', characteristicNames);

    return (
      <div>
        <button type='button' onClick={this.displayModal}> ADD A REVIEW </button>
        {
          this.state.showModal ?
            <div className='add-review-modal'>
              <div className='add-review-modal-main'>
                <h3> Write Your Review </h3>
                <h4> About {this.state.productInfo.name} </h4>
                <div className='add-review-rating'>
                  Overall Rating *
                  <div className='description' onClick={this.starsClicked} >
                    <Stars size={18} rating={this.state.selectedStars} />
                  {
                      ['Poor', 'Fair', 'Average', 'Good', 'Great'][this.state.selectedStars - 1]
                  }
                  </div>
                </div>

                <div onClick={this.onRecommendChange}>
                  Do you recommend this product? *
                  <input type='radio' name='recommmend' id='yes' value='yes'/>
                  <label htmlFor='yes'> YES </label>
                  <input type='radio' name='recommmend' id='no' value='no'/>
                  <label htmlFor='no'> NO </label>
                </div>

                <div className='add-review-characteristics'>
                  Characteristics
                  {
                    characteristicNames.map((item, idx) => {
                      return <SelectCharacteristic key={idx} characteristics={this.state.characteristics} characteristicName={item.name} characteristicId={item.id} onInputChange={this.onInputChange}/>
                    })
                  }

                </div>

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
