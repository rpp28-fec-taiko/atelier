import React from 'react';
import { shallow } from 'enzyme';
import ProductInfo from '../../../client/src/components/productOverview/ProductInfo.jsx';

test('Checks that ProductInfo component is rendering', () => {
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
    sale_price: '45',
    original_price: '55'
  }

  const wrapper = shallow(<ProductInfo product={dummyProduct} currentStyle={style} avgRating={3} noOfReviews={45}/>);
  expect(wrapper.text()).toContain('Read');
});
