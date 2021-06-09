import React from 'react'

const StyleThumbnail = (props) => {

  let thumbnail;
  if (props.currentStyle.name === props.name) {
    thumbnail =
    <div className='style-thumbnail current-style-selection' onClick={props.updateStyle}>
      <img src={props.thumbnail}></img>
    </div>
  } else {
    thumbnail =
    <div className='style-thumbnail' onClick={props.updateStyle}>
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