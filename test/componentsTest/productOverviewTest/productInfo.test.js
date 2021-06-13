import React from 'react';
import { shallow } from 'enzyme';
import ProductInfo from '../../../client/src/components/productOverview/ProductInfo.jsx';


const dummyProduct = {
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

const style = {
  name: 'test',
  original_price: '100',
  photos: [],
  sale_price: null,
  skus: [],
  style_id: '12345'
}

describe('Product Info', () => {

  const wrapper = shallow(<ProductInfo product={dummyProduct} currentStyle={style} avgRating={3} noOfReviews={45}/>);

  it('checks that component is rendering', () => {
    expect(wrapper.exists('.product-info')).toBe(true);
  });

  it('should render sale price when current product is on sale', () => {
    let saleStyle = { sale_price: '45', original_price: '55' };
    wrapper.setProps({currentStyle: saleStyle});
    expect(wrapper.exists('.sale-price')).toBe(true);
  });

  // it('should not render review rating when no reviews exist', () => {
  //   expect(wrapper.exists('.overview-stars')).toBe(false);
  //   expect(wrapper.exists('.read-reviews')).toBe(false);
  // });

  it('should always render a product name, category, and price', () => {
    expect(wrapper.exists('.product-name')).toBe(true);
    expect(wrapper.exists('.product-category')).toBe(true);
    expect(wrapper.exists('.sale-price')).toBe(true);
    let noSaleStyle = { sale_price: null, original_price: '55' };
    wrapper.setProps({ currentStyle: noSaleStyle});
    expect(wrapper.exists('.price')).toBe(true);
  });


});



