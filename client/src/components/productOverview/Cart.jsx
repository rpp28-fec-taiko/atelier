import React from 'react';

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='cart'>
        <div>Size</div>
        <div>Quantity</div>
        <div>AddToCart</div>
        <div>Star</div>
      </div>
    );
  }
}

export default Cart;