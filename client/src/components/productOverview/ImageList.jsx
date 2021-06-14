import React from 'react';
import ImageThumbnail from './ImageThumbnail.jsx';
import Circle from './icons/Circle.jsx';

const ImageList = (props) => {

  if (props.view === 'default') {
    return (
      <div className='image-list-default'>
        {props.photos.map((photo, idx) => <ImageThumbnail currentImage={props.currentImage} updateMainImage={props.updateMainImage} thumbnail={photo.thumbnail_url} url={photo.url} key={idx}/>)}
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