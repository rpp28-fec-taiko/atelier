import React from 'react';
import ImageThumbnail from './ImageThumbnail.jsx';

const ImageList = (props) => (
  <div className='image-list'>
    {props.photos.map(photo => <ImageThumbnail currentImage={props.currentImage} updateMainImage={props.updateMainImage} thumbnail={photo.thumbnail_url} />)}
  </div>
);

export default ImageList;