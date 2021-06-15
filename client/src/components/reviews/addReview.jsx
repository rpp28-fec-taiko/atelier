import React from 'react';
import Stars from '../stars/stars.jsx';
import SelectCharacteristic from './selectCharacteristic.jsx';

class AddReview extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      showModal: false,
      selectedStars: 0,
      recommend: '',
      summary: '',
      body: '',
      nickname: '',
      email: '',
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

  onInputChange = (e) => {
    console.log('e', e.target.name, e.target.value);
    this.setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }), () => console.log('state rec', this.state))
  }

  onCharacteristicChange = (e, id) => {
    // console.log('e', e.target.value);
    this.setState((prevState) => ({
      characteristics: {
        ...prevState.characteristics,
        [id]: e.target.value
      }
    }), () => console.log('After chngin', this.state))
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
                <h4> About {this.props.productName} </h4>
                <div className='add-review-rating'>
                  Overall Rating *
                  <div className='description' onClick={this.starsClicked} >
                    <Stars size={18} rating={this.state.selectedStars} />
                  {
                      ['Poor', 'Fair', 'Average', 'Good', 'Great'][this.state.selectedStars - 1]
                  }
                  </div>
                </div>

                <div onClick={this.onInputChange}>
                  Do you recommend this product? *
                  <input type='radio' name='recommend' id='yes' value='yes'/>
                  <label htmlFor='yes'> YES </label>
                  <input type='radio' name='recommend' id='no' value='no'/>
                  <label htmlFor='no'> NO </label>
                </div>

                <div className='add-review-characteristics'>
                  Characteristics *
                  {
                    characteristicNames.map((item, idx) => {
                      return <SelectCharacteristic key={idx} characteristics={this.state.characteristics} characteristicName={item.name} characteristicId={item.id} onCharacteristicChange={this.onCharacteristicChange}/>
                    })
                  }
                </div>

                <div className='add-review-summary'>
                  <label htmlFor='summary'> Review summary </label>
                  <input type='text' id='summary' name='summary' maxLength={60} placeholder='Example: Best purchase ever!' size={80} onChange={this.onInputChange}/>
                </div>

                <div className='add-review-body'>
                  <label htmlFor='body'> Review body * </label>
                  <textarea id='body' name='body' rows={10} cols={80} minLength={50} maxLength={1000} placeholder='Why did you like the product or not?' onChange={this.onInputChange}>
                  </textarea>
                  <p>Minimum required characters left: { this.state.body.length >= 50 ? 'Minimum reached' : (50 - this.state.body.length) } </p>
                </div>

                <div className='add-review-photos'>  Upload your photos </div>

                <div className='add-review-nickname'>
                  <label htmlFor='nickname'> What is your nickname *</label>
                  <input type='text' id='nickname' name='nickname' maxLength={60} placeholder='Example: jackson11!' onChange={this.onInputChange} />
                  <p style={{marginTop: '0'}}>For privacy reasons, do not use your full name or email address</p>
                </div>

                <div className='add-review-email'>
                  <label htmlFor='email'> Your email *</label>
                  <input type='email' id='email' name='email' maxLength={60} placeholder='Example: jackson11@email.com' onChange={this.onInputChange} />
                  <p style={{marginTop: '0'}}>For authentication reasons, you will not be emailed</p>
                </div>

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
