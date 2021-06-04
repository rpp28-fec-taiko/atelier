import React from 'react';
import ProductInfo from './ProductInfo.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='overview'>
        <h2>Overview</h2>
        <div>Image Gallery</div>
        <ProductInfo />
        <div>Style Selector</div>
        <div>Cart</div>
      </div>
    );
  }
}

export default Overview;