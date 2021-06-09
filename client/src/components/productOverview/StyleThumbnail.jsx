import React from 'react'
import CheckCircle from '../reviews/CheckCircle.jsx';
// use checkCircle later for selected style

const StyleThumbnail = (props) => {

  let thumbnail;
  if (props.currentStyle.name === props.name) {
    thumbnail =
    <div className='style-thumbnail current-style-selection' onClick={props.updateStyle}>
      <img src={props.thumbnail}></img>
    </div>
  } else {
    thumbnail =
    <div className='style-thumbnail non-current-style' onClick={props.updateStyle}>
      <img src={props.thumbnail}></img>
    </div>
  }

  return (
    <>
    {thumbnail}
    </>
  )
}


export default StyleThumbnail;