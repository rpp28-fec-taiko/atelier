import React from 'react';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: '',
      photos: [],
      extendedView: false
    }
  }

  componentDidUpdate() {

    fetch(`http://localhost:3000/products`)
      .then((results) => {
        console.log('fetch results', results)
      })
      .catch(() => {
        console.log('error fetching products from server')
      });

    // console.log(this.props);
    // if (this.props.photos) {
    //   this.setState({
    //     currentImage: this.state.photos[0].url
    //   }, () => console.log('updatedimagestate', this.state));
    // }
  }

  // pass style images down thru props

  render() {

    let mainImage;
    if (this.props.currentStyle.photos) {
      console.log('state.images', this.props.currentStyle.photos);
      mainImage = <img className='image-main' src={this.props.currentStyle.photos[0].url}></img>
    } else {
      mainImage = <div></div>
    }

    return (
      <div className='image-gallery'>
        {mainImage}
      </div>
    );
  }
}

export default ImageGallery;