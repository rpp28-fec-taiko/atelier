import React from 'react';
import ImageThumbnail from './ImageThumbnail.jsx';
import Circle from './icons/Circle.jsx';

const ImageList = (props) => {

  if (props.view === 'default') {
    return (
      <div className='image-list-default'>
        {props.photos.map(photo => <ImageThumbnail currentImage={props.currentImage} updateMainImage={props.updateMainImage} thumbnail={photo.thumbnail_url} />)}
      </div>
    )
  } else {
    return (
      <div className='image-list-expanded'>
        {props.photos.map(photo => <Circle currentImage={props.currentImage} updateMainImage={props.updateMainImage} thumbnail={photo.thumbnail_url} />)}
      </div>
    )
  }

}


export default ImageList;