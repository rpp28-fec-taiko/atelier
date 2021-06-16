import React from 'react';
import ImageThumbnail from './ImageThumbnail.jsx';
import Circle from './icons/Circle.jsx';
import ArrowDown from './icons/ArrowDown.jsx';
import ArrowUp from './icons/ArrowUp.jsx';

const ImageList = (props) => {

  // keep track of current selected index for image thumbnail
  // keep track of of the current 7 thumbnails displayed
  // add down button here on condition that there are more thumbanils to be displayed
  // add up button as well if necessary


  if (props.view === 'default') {
    return (
      <div className='image-list-default'>
        <ArrowUp />
        {props.photos.map((photo, idx) => <ImageThumbnail currentImage={props.currentImage} updateMainImage={props.updateMainImage} thumbnail={photo.thumbnail_url} url={photo.url} key={idx}/>)}
        <ArrowDown />
      </div>
    )
  } else {
    return (
      <div className='image-list-expanded'>
        {props.photos.map((photo, idx) => <Circle currentImage={props.currentImage} updateMainImage={props.updateMainImage} thumbnail={photo.thumbnail_url} key={idx} />)}
      </div>
    )
  }

}


export default ImageList;