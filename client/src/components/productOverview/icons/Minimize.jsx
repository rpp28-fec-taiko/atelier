import React from "react";

const Minimize = ({size=40, color="white", toggleExpandedView}) => (
  <svg
    onClick={toggleExpandedView}
    className='minimize-image'
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M4 14h6v6M3 21l6.1-6.1M20 10h-6V4M21 3l-6.1 6.1"/>
  </svg>
);

export default Minimize;