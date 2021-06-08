import React from 'react';
import ProductInfo from './ProductInfo.jsx';
import Cart from './Cart.jsx';
import StyleSelector from './StyleSelector.jsx';
import ImageGallery from './ImageGallery.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {},
      styles: [],
      currentStyle: {}
    }

  }

  componentDidMount() {
    // populate the state stuff here
    console.log(this.props.productId)
    // fetch product info
    this.fetchProductInfo();
      // fetch styles as well
    this.fetchStyles();

  }

  fetchProductInfo() {
    // fetch product info
    fetch(`http://localhost:3000/productInfo?productId=${this.props.productId}`)
      .then((results) => {
        return results.json()
      })
      .then((productInfo) => {
        //  setState
        this.setState({product: productInfo}, () => console.log(this.state));
      })
      .catch(() => {
        console.log('error fetching product info from server');
      });
  }

  fetchStyles() {
    fetch(`http://localhost:3000/styles?productId=${this.props.productId}`)
      .then((results) => {
        console.log('results', results)
      })
      .catch(() => {
        console.log('error fetching styles from server')
      });
  }

  render() {
    return (
      <div className='overview'>
        <ImageGallery />
        <ProductInfo product={this.state.product}/>
        <StyleSelector styles={this.state.styles}/>
        <Cart style={this.state.currentStyle}/>
      </div>
    );
  }
}

export default Overview;