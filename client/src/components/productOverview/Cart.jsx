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
    let skus = this.props.currStyle.skus;
    let maxQty = 15; // default
    let availableSizes = [];
    let outOfStock = false;

    for (let key in skus) {
      let currSku = skus[key]
      if (currSku.size === this.state.size && currSku.quantity < 15) {
        maxQty = currSku.quantity;
      }
      if (currSku.quantity > 0) {
        availableSizes.push(currSku.size)
      }
    }

    // QTY SELECT set up for dynmically rendering quantity options
    let qtys = []
    for (let i = 1; i <= maxQty; i++) {
      qtys.push(i);
    }

    // SIZE SELECT predefine in case OUT OF STOCK needs to be rendered instead
    let cartSizeSelect =
      <span className='cart-size-select'>
        <select defaultValue='Select Size' onChange={this.handleSizeChange.bind(this)}>
        <option disabled>Select Size</option>
        {availableSizes.map(size => <option value={size} key={size}>{size}</option>)}
        </select>
      </span>

    if (!availableSizes.length) {
      outOfStock = true;
    }
    if (outOfStock) {
      cartSizeSelect = <span className='cart-size-select'>OUT OF STOCK</span>
    }

    // let qtyDefault;
    // if (!this.state.size) {
    //   qtyDefault = '-'
    // } else {
    //   qtyDefault = 1
    // }


    let qtySelectorContents;
    // default qty before style is selected
    if (!this.state.size) {
      qtySelectorContents =
      <select defaultValue='-' onChange={this.handleQuantityChange.bind(this)}>
        <option disabled> - </option>
      </select>
    // after style is selected default to one
    } else {
      qtySelectorContents =
      <select onChange={this.handleQuantityChange.bind(this)}>
        {qtys.map(num => <option value={num} key={num}>{num}</option>)}
      </select>
    }


    return (
      <div className='cart'>
        <div className='size-qty-container'>
        {cartSizeSelect}
        <span className='cart-quantity-select'>
          {/* <select onChange={this.handleQuantityChange.bind(this)}> */}
            {/* <option defaultValue="Select Quantity">{qtyDefault}</option> */}
            {/* {qtys.map(num => <option value={num} key={num}>{num}</option>)} */}
          {qtySelectorContents}
          {/* </select> */}
        </span>
        </div>

        <div className='add-to-cart'>
          <button>Add To Cart</button>
        </div>
        {/* <div className='star-box'>Star</div> */}
      </div>
    );
  }
}

export default Cart;