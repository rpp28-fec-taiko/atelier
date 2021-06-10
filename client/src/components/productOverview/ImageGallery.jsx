import React from 'react';
import ImageList from './ImageList.jsx';
import ChevronLeft from './icons/ChevronLeft.jsx';
import ChevronRight from './icons/ChevronRight.jsx';

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImage: '',
      photos: [],
      currIndex: 0,
      extendedView: false
    }
  }

  componentDidUpdate(prevProps) {
    // check to make sure valid props are being passed in - it takes a few renders before they do..
    if (!prevProps.currentStyle.photos && this.props.currentStyle.photos) {
      this.setState({
        currentImage: this.props.currentStyle.photos[0],
        photos: this.props.currentStyle.photos
      });

      // fix to make the style selector on click still function
    } else if (prevProps.currentStyle.style_id) {
      if (prevProps.currentStyle.style_id !== this.props.currentStyle.style_id) {
        this.setState({
          currentImage: this.props.currentStyle.photos[0],
          photos: this.props.currentStyle.photos
        });
      }
    }
  }

  updateMainImage(e) {
    e.preventDefault();
    this.state.photos.forEach(image => {
      if (image.thumbnail_url === e.target.src) {
        this.setState({
          currentImage: image
        })
      }
    })
  }

  slideImageIndex() {
    // change main image
    // move right or left in the array to the neighboring img depending on which arrow was clicked
  }

  render() {

    // left-right arrows
    let leftArrow = <ChevronLeft />
    let rightArrow = <ChevronRight />

    let mainImage;
    let imageList;
    if (this.props.currentStyle.photos) {
      mainImage = <img className='image-main' src={this.state.currentImage.url}></img>
      imageList = <ImageList currentImage={this.state.currentImage} updateMainImage={this.updateMainImage.bind(this)} photos={this.state.photos} />
    } else {
      mainImage = <div></div>
      imageList = <div></div>
    }

    return (
      <div className='image-gallery'>
        {leftArrow}
        {mainImage}
        {rightArrow}
        {imageList}
      </div>
    );
  }
}

export default ImageGallery;