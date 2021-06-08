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
    fetch(`http://localhost:3000/productInfo?productId=${this.props.productId}`)
      .then((results) => {
        return results.json()
      })
      .then((productInfo) => {
        this.setState({product: productInfo}, () => console.log(this.state));
      })
      .catch(() => {
        console.log('error fetching product info');
      });

    // fetch product info

    // fetch styles as well

    //  setState
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