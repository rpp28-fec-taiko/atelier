import React from 'react';
import ProductInfo from './ProductInfo.jsx';
import Cart from './Cart.jsx';
import Styles from './Styles.jsx';
import ImageGallery from './ImageGallery.jsx';

class Overview extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product: {
        "id": 11,
        "name": "Air Minis 250",
        "slogan": "Full court support",
        "description": "This optimized air cushion pocket reduces impact but keeps a perfect balance underfoot.",
        "category": "Basketball Shoes",
        "default_price": "0",
        "features": [
        {
                "feature": "Sole",
                "value": "Rubber"
            },
        {
                "feature": "Material",
                "value": "FullControlSkin"
            },

        ],
      }
    }

  }

  render() {
    return (
      <div className='overview'>
        <h2>Overview</h2>
        <ImageGallery />
        <ProductInfo product={this.state.product}/>
        <Styles />
        <Cart />
      </div>
    );
  }
}

export default Overview;