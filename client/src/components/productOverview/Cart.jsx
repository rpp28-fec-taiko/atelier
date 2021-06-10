import React from 'react';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      size: null,
      quantity: 1
    }
  }

  componentDidMount() {
    // for checking cart updates - can move elsewhere
    fetch('http://localhost:3000/cart')
      .then((results) => {
        return results.json();
      })
      .then((cart) => {
        console.log('success getting cart from server', cart);
      })
      .catch(() => {
        console.log('error getting Cart from server')
      });
  }

  handleSizeChange(e) {
    this.setState({size: e.target.value}, () => console.log(this.state));
  }

  handleQuantityChange(e) {
    this.setState({quantity: e.target.value}, () => console.log(this.state));
  }

  handleAddToCart() {
    // on click of cart button

    // check that a valid size and quantity selected
    if (this.state.size && this.state.quantity) {

      // get sku for style/size - Refactor into helper method...
      let sku_id;
      console.log(this.props.currStyle.skus);
      let skus = this.props.currStyle.skus;
      for (let key in skus) {
        let currSku = skus[key]
        if (currSku.size === this.state.size) {
          sku_id = key;
          break;
        }
      }
      // use fetch: make POST request to server
      fetch(`http://localhost:3000/cart?sku=${sku_id}`, { method: 'POST'})
        .then(() => {
          console.log('success posting Cart to server')
        })
        .catch(() => {
          console.log('error posting Cart to server')
        });

      // how to do handle the quantity async? Promise All.


    }

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


    // QUANTITY SELECTOR
    let qtySelector;
    // default qty before style is selected
    if (!this.state.size) {
      qtySelector =
      <select defaultValue='-' onChange={this.handleQuantityChange.bind(this)}>
        <option disabled> - </option>
      </select>
    // after style is selected default to one
    } else {
      qtySelector =
      <select onChange={this.handleQuantityChange.bind(this)}>
        {qtys.map(num => <option value={num} key={num}>{num}</option>)}
      </select>
    }

    // ADD TO CART
    let addToCart;
    if (outOfStock) {
      addToCart = <div className='add-to-cart'></div>
    } else {
      addToCart =
      <div className='add-to-cart'>
        <button onClick={this.handleAddToCart.bind(this)}>Add To Cart</button>
      </div>
    }

    return (
      <div className='cart'>
        <div className='size-qty-container'>
          {cartSizeSelect}
          <span className='cart-quantity-select'>
            {qtySelector}
          </span>
        </div>
        {addToCart}
        {/* <div className='star-box'>Star</div> */}
      </div>
    );
  }
}

export default Cart;