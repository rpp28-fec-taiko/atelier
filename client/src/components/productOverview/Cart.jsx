import React from 'react';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: null,
      quantity: null
    }
  }

  handleSizeChange(e) {
    this.setState({size: e.target.value}, () => console.log(this.state));
  }

  handleQuantityChange(e) {
    this.setState({quantity: e.target.value}, () => console.log(this.state));
  }

  render() {
    return (
      <div className='cart'>
        <div className='size'>
          <select onChange={this.handleSizeChange.bind(this)}>
            <option defaultValue='Select Size'>Select Size</option>
            <option value="XS">XS</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
          </select>
        </div>

        <div className='quantity'>
          <select onChange={this.handleQuantityChange.bind(this)}>
            <option defaultValue="Select Quantity">Qty</option>
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