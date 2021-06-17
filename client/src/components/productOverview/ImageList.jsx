import React from 'react';
import ImageThumbnail from './ImageThumbnail.jsx';
import Circle from './icons/Circle.jsx';
import ArrowDown from './icons/ArrowDown.jsx';
import ArrowUp from './icons/ArrowUp.jsx';

class ImageList extends React.Component {
  constructor(props) {
    super(props);

    // this.props.photos = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    // keep track of current selected index for image thumbnail - ALREADY TRACKING in parent component, just use as props
    // this.props.currentIndex

    // keep track of of the current 7 thumbnails displayed?

    // also need to use updateMainImage when arrow is clicked


    this.state = {
      // will have to adjust something here for 'start' when current index is out of 0-7 range on rendering
      start: 0,
      end: 6
      // end: this.props.photos.length > 7 ? 6 : this.props.photos.length,
    }

    // this.props.photos.length > 7 ? 6 : this.props.photots.length,

  }

  // methods

  moveDown() {

    // no need to worry about the edge cases, will handle that in the render function

    // on click down arrow

    // if currently selected index is the top most image thumbnail
    // scrolling down should update the main image to be the next index over

    // always change the range in state
    this.setState((prevState) => {
      return {
        start: prevState.start + 1,
        end: prevState.end + 1
      }
    });
  }

  moveUp() {

    // no need to worry about the edge cases, will handle that in the render function

    // on click up arrow

    // if currently selected index is the bottom most image thumbnail
    // scrolling up should update the main image to be the prev index in the array

    // always change the range in state
    this.setState((prevState) => {
      return {
        start: prevState.start - 1,
        end: prevState.end - 1
      }
    });

  }


  render() {
    // add down button here on condition that there are more thumbanils to be displayed

    // add up button on condition that there are more thumbnails to show

    // only map and render the photos in the current range mangaged in state, groups of 7
    let thumbnailList = this.props.photos.slice(this.state.start, this.state.end);
    console.log('thumbnaillist', thumbnailList)

    if (this.props.view === 'default') {
      return (
        <div className='image-list-default'>
          <ArrowUp moveUp={this.moveDown.bind(this)}/>
          {thumbnailList.map((photo, idx) => <ImageThumbnail currentImage={this.props.currentImage} updateMainImage={this.props.updateMainImage} thumbnail={photo.thumbnail_url} url={photo.url} key={idx}/>)}
          <ArrowDown moveDown={this.moveDown.bind(this)} />
        </div>
      )
    } else {
      // need to address how to handle scrolling in expanded view
      return (
        <div className='image-list-expanded'>
          {this.props.photos.map((photo, idx) => <Circle currentImage={this.props.currentImage} updateMainImage={this.props.updateMainImage} thumbnail={photo.thumbnail_url} key={idx} />)}
        </div>
      )
    }

  }
}







export default ImageList;