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
      currentIndex: 0,
      // extendedView: false
    }
  }

  componentDidUpdate(prevProps) {
    // check to make sure valid props are being passed in - it takes a few renders before they do..
    if (!prevProps.currentStyle.photos && this.props.currentStyle.photos) {
      this.setState({
        // currentImage: this.props.currentStyle.photos[0],
        currentImage: this.props.currentStyle.photos[this.state.currentIndex],
        photos: this.props.currentStyle.photos
      });

      // for style selector onclick
    } else if (prevProps.currentStyle.style_id) {
      if (prevProps.currentStyle.style_id !== this.props.currentStyle.style_id) {
        this.setState({
          // currentImage: this.props.currentStyle.photos[0],
          currentImage: this.props.currentStyle.photos[this.state.currentIndex],
          photos: this.props.currentStyle.photos
        });
      }
    }
  }

  updateMainImage(e) {
    e.preventDefault();
    this.state.photos.forEach((image, idx) => {
      if (image.thumbnail_url === e.target.src || image.thumbnail_url === e.target.id) {
        this.setState({
          currentImage: image,
          currentIndex: idx
        });
      }
    });
  }

  nextImage() {
    this.setState((prevState) => {
      return {
        currentImage: this.state.photos[prevState.currentIndex + 1],
        currentIndex: prevState.currentIndex + 1
      }
    });
  }

  prevImage() {
    this.setState((prevState) => {
      return {
        currentImage: this.state.photos[prevState.currentIndex - 1],
        currentIndex: prevState.currentIndex - 1
      }
    });
  }

  render() {

    // vars for classnames depending on whether expanded or default gallery layout
    let view = this.props.expanded ? 'expanded' : 'default';

    // left-right arrows
    let leftArrow =
      this.state.currentIndex !== 0 ? <ChevronLeft view={view} prevImage={this.prevImage.bind(this)} color='slategrey'/> : null;
    let rightArrow =
      this.state.currentIndex !== this.state.photos.length - 1 ? <ChevronRight view={view} nextImage={this.nextImage.bind(this)} color='slategrey'/> : null;

    // main image and thumbnail list
    let mainImage;
    let imageList;
    if (this.props.currentStyle.photos) {
      mainImage = <img className={`image-main-${view}`} src={this.state.currentImage.url} onClick={this.props.toggleExpandedView}></img>
      imageList = <ImageList view={view} currentImage={this.state.currentImage} updateMainImage={this.updateMainImage.bind(this)} photos={this.state.photos} />
    } else {
      mainImage = <div></div>
      imageList = <div></div>
    }

    return (
      <div className={`image-gallery-${view}`}>
        {leftArrow}
        {mainImage}
        {rightArrow}
        {imageList}
      </div>
    );
  }
}

export default ImageGallery;