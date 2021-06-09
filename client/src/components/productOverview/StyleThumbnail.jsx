import React from 'react'

const StyleThumbnail = (props) => (
  <div className='style-thumbnail' onClick={props.updateStyle}>
    <img src={props.thumbnail}></img>
  </div>
);

export default StyleThumbnail;