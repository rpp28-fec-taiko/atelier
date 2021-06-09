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
    this.fetchProductInfo()
      // then fetch styles as well
      .then(this.fetchStyles.bind(this))
      // then set default Style
      .then(this.setDefaultStyle.bind(this));
  }

  fetchProductInfo() {
    // fetch product info
    return fetch(`http://localhost:3000/productInfo?productId=${this.props.productId}`)
      .then((results) => {
        return results.json();
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
    return fetch(`http://localhost:3000/styles?productId=${this.props.productId}`)
      .then((results) => {
        console.log('results', results)
        return results.json();
      })
      .then((styles) => {
        this.setState({styles: styles.results}, () => console.log(this.state));
      })
      .catch(() => {
        console.log('error fetching styles from server')
      });
  }

  setDefaultStyle() {
    this.state.styles.forEach(style => {
      if (style['default?']) {
        this.setState({currentStyle: style}, () => console.log('state', this.state));
      }
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