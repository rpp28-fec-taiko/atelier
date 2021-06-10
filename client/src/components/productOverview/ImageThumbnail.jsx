import React from 'react';

const ImageThumbnail = (props) => {

  let imageTile;
  if (props.thumbnail === props.currentImage.thumbnail_url) {
    imageTile =
      <img className='image-thumbnail current-image-selection' onClick={props.updateMainImage} src={props.thumbnail}></img>
  } else {
    imageTile =
      <img className='image-thumbnail non-current-image' onClick={props.updateMainImage} src={props.thumbnail}></img>
  }

  return (
    <>
    {imageTile}
    </>
  )
}


export default ImageThumbnail;