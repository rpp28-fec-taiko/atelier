import React from 'react';

const ImageList = (props) => (
  <div className='image-list'>
    {props.photos.map(photo => <img className='image-thumbnail' src={photo.url || photo.thumbnail_url}></img>)}
  </div>
);

export default ImageList;