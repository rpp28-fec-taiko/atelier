import React from 'react';

class UploadPhotos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showImageModal: false,
      file: '',
      photoUrl: ''
    }
  }

  displayImageModal = () => {
    this.setState((prevState) => ({
      showImageModal: !prevState.showImageModal
    }))
  }

  closeImageModal = (e) => {
    // if (this.state.photoUrl.length === 0) {
    //   return this.displayImageModal();
    // }
    // this.props.uploadPhoto(this.state.photoUrl)
    this.displayImageModal();
  }

  handleFileChange = (e) => {
    this.setState({file: e.target.files[0]}, () => console.log('file', this.state))
  }

  handleFileSubmission = (e) => {
    if (typeof this.state.file === 'string' || !this.state.file.type.includes('image')) {
      window.alert('Please choose an image file');
      return;
    }
    let formData = new FormData();
    formData.append('imageFile', this.state.file);
    // console.log('formdata', formData.get('imageFile'));
    fetch(`http://localhost:3000/uploadImage`, {
      method: 'POST',
      body: formData
    })
    .then((resp) => {
      return resp.json();
    })
    .then((url) => {
      // console.log('url in Upload Photot', url);
      this.props.uploadPhoto(url);
    })
    .catch((err) => {
      console.log('ERROR UPLOADING PHOTO', err)
    })
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
              <div>
                <label htmlFor='upload-photo'>Add Photo Url</label>
                <input type='file' name='upload-photo' id='upload-photo' onChange={this.handleFileChange} />
                <button type='button' onClick={this.handleFileSubmission} > CLick here to Upload your photo </button>
              </div>
              <button type='button' onClick={this.closeImageModal} style={{cursor: 'pointer'}}>  CLOSE </button>
            </div>
          </div>
          : null
        }
      </div>
    );
  }
}

export default UploadPhotos;