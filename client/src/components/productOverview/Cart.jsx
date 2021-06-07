import React from 'react';

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='cart'>
        <div className='size'>
          <select>
            <option selected value="Select Size">Select Size</option>
          </select>
        </div>

        <div className='quantity'>
          <select>
            <option selected value="Select Quantity">Qty</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
          </select>
        </div>

        <button>Add To Cart +</button>
        <div className='star-box'>Star</div>
      </div>
    );
  }
}

export default Cart;