import React from 'react';

class UploadPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showImageModal: false,
      photoUrl: ''
    }
  }

  displayImageModal = () => {
    this.setState((prevState) => ({
      showImageModal: !prevState.showImageModal
    }))
  }

  closeImageModal = (e) => {
    if (this.state.photoUrl.length === 0) {
      return this.displayImageModal();
    }
    this.props.uploadPhoto(this.state.photoUrl)
    this.displayImageModal();
  }

  onUrlChange = (e) => {
    console.log('e', e)
    this.setState({photoUrl: e.target.value})
  }

  render () {
    return (
      <div>
        {
          this.props.photos.length >= 5 ? null : <button type='button' onClick={this.displayImageModal}> Upload your photos </button>
        }

        {
          this.state.showImageModal ?
          <div className='upload-photos-modal'>
            <div className='upload-photos-modal-main'>
              <h3> Upload A Photo </h3>
              <div onChange={this.onUrlChange}>
                <label htmlFor='upload-photo'>Add Photo Url</label>
                <input type='url' name='upload-photo' id='upload-photo' size={100} />
              </div>
              <button type='button' onClick={this.closeImageModal} style={{cursor: 'pointer'}}>  Done </button>
            </div>
          </div>
          : null
        }
      </div>
    );
  }
}

export default UploadPhotos;