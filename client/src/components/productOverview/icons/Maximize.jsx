import React from "react";

const Maximize = ({size=30, color="white", toggleExpandedView}) => (
  <svg
    onClick={toggleExpandedView}
    className='maximize-image'
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1"/>
  </svg>
);

export default Maximize;