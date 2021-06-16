import React from 'react';
import Stars from '../stars/stars.jsx';
import SelectCharacteristic from './selectCharacteristic.jsx';

class AddReview extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      showModal: false,
      rating: 0,
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
    this.setState((prevState) => {
      let rating;
      let stars = e.target.dataset.starnumber
      console.log('stars', stars)
      if (stars === undefined) {
        rating = prevState.rating
      } else {
        rating = Number(stars)
      }

      return {
        ...prevState,
        rating
      }
    })
  }

  onInputChange = (e) => {
    console.log('e', e.target.name, e.target.value);
    this.setState((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }), () => console.log('state after updating recommend', this.state))
  }

  onCharacteristicChange = (e, id) => {
    // console.log('e', e.target.value);
    this.setState((prevState) => ({
      characteristics: {
        ...prevState.characteristics,
        [id]: e.target.value
      }
    }), () => console.log('After chnging characteristics', this.state))
  }

  handleSubmit = (e) => {
    e.preventDefault();
    //Any mandatory fields are blank: Recommend, body, name and email are taken care of by input element validation.
    let {rating, recommend, body, nickname, email, characteristics } = this.state;
    // console.log('pre submit', rating, recommend, body, nickname, email, characteristics)
      //rating = 0 || recommend = '' || body = '' || nickname = '' || email = '' || loop over char obj and see that all th required keys have a value
    if (rating === 0) {
      window.alert(`You must enter the following: \n Overall Rating`)
      return;
    }
    // let { characteristics } = this.props;
    // console.log('character', characteristics, this.props.characteristics);
    let originalCharacteristicsList = Object.values(this.props.characteristics);
    let userSelectedCharacteristics = Object.keys(characteristics);
    console.log('OK', originalCharacteristicsList, userSelectedCharacteristics)

    for (let i = 0; i < originalCharacteristicsList.length; i++) {
      if (userSelectedCharacteristics.indexOf(String(originalCharacteristicsList[i].id)) === -1) {
        console.log('CHECL', originalCharacteristicsList[i].id)
        window.alert(`You must enter the following: \n Characteristics`)
        return;
      }
    }
    //Body < 50
    //email not in correct format
    //The images selected are invalid or unable to be uploaded.
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
            <form className='add-review-modal' onSubmit={this.handleSubmit}>
              <div className='add-review-modal-main'>
                <h3> Write Your Review </h3>
                <h4> About {this.props.productName} </h4>
                <div className='add-review-rating'>
                  Overall Rating *
                  <div className='description' >
                    <div className='stars' onClick={this.starsClicked}>
                      <Stars size={18} rating={this.state.rating} />
                    </div>
                    {
                      ['Poor', 'Fair', 'Average', 'Good', 'Great'][this.state.rating - 1]
                    }
                  </div>
                </div>

                <div onClick={this.onInputChange}>
                  Do you recommend this product? *
                  <input type='radio' name='recommend' id='yes' value='yes' required/>
                  <label htmlFor='yes'> YES </label>
                  <input type='radio' name='recommend' id='no' value='no' required/>
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
                  <textarea id='body' name='body' rows={10} cols={80} minLength={50} maxLength={1000} placeholder='Why did you like the product or not?' onChange={this.onInputChange} required>
                  </textarea>
                  <p>Minimum required characters left: { this.state.body.length >= 50 ? 'Minimum reached' : (50 - this.state.body.length) } </p>
                </div>

                <div className='add-review-photos'>  Upload your photos </div>

                <div className='add-review-nickname'>
                  <label htmlFor='nickname'> What is your nickname *</label>
                  <input type='text' id='nickname' name='nickname' maxLength={60} placeholder='Example: jackson11!' onChange={this.onInputChange} required />
                  <p style={{marginTop: '0'}}>For privacy reasons, do not use your full name or email address</p>
                </div>

                <div className='add-review-email'>
                  <label htmlFor='email'> Your email *</label>
                  <input type='email' id='email' name='email' maxLength={60} placeholder='Example: jackson11@email.com' onChange={this.onInputChange} required />
                  <p style={{marginTop: '0'}}>For authentication reasons, you will not be emailed</p>
                </div>

                <div className='add-review-submit'>
                  <button type='submit' style={{cursor: 'pointer'}}>  SUBMIT REVIEW </button>
                </div>

                <button type='button' onClick={this.displayModal} style={{cursor: 'pointer'}}>  CLOSE </button>
              </div>
            </form> :
            null
        }
      </div>
    );
  }
};

export default AddReview;


//aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa