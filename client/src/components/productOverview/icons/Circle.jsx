import React from "react";

const Circle = ({size=25, color="grey", updateMainImage, currentImage, thumbnail}) => {

  let fill;
  if (thumbnail === currentImage.thumbnail_url) {
    fill = 'white';
    size += 7;
  } else {
    fill = 'grey'
  }

  return (
    <svg
      className='image-thumbnail-expanded'
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round">
      <circle onClick={updateMainImage} id={thumbnail} cx="12" cy="12" r="10"></circle>
    </svg>
  )
}

export default Circle;