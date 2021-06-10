import React from 'react';
import ImageList from './ImageList.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: '',
      photos: [],
      extendedView: false
    }
  }

  // componentDidMount() {

  //   // just for researching products
  //   // fetch(`http://localhost:3000/products`)
  //   //   .then((results) => {
  //   //     console.log('fetch results', results)
  //   //   })
  //   //   .catch(() => {
  //   //     console.log('error fetching products from server')
  //   //   });

  //   // console.log(this.props);
  //   // if (this.props.currentStyle.photos) {
  //   //   this.setState({
  //   //     photos: this.props.currentStyle.photos
  //   //   }, () => console.log('imagestate', this.state));
  //   // }
  // }

  render() {

    console.log('props', this.props.currentStyle.photos)
    let mainImage;
    let imageList;
    if (this.props.currentStyle.photos) {
      mainImage = <img className='image-main' src={this.props.currentStyle.photos[0].url}></img>
      imageList = <ImageList photos={this.props.currentStyle.photos} />
    } else {
      mainImage = <div></div>
      imageList = <div></div>
    }

    return (
      <div className='image-gallery'>
        {mainImage}
        {imageList}
      </div>
    );
  }
}

export default ImageGallery;