import React from 'react';
import { shallow } from 'enzyme';
import Cart from '../../../client/src/components/productOverview/Cart.jsx';


const currentStyle = {
  "style_id": 1,
  "name": "Black",
  "skus": {
      "37": {
            "quantity": 8,
            "size": "XS"
      },
      "38": {
            "quantity": 16,
            "size": "S"
      },
      "39": {
            "quantity": 17,
            "size": "M"
      },
  }

}


describe ('Cart', () => {
  const wrapper = shallow(<Cart currStyle={currentStyle}/>, {disableLifecycleMethods: true});

  it('checks that component exists', () => {
    expect(wrapper.exists('.cart')).toBe(true);
  });

  it ('should only render sizes that are available for current style', () => {
    // plus one to account for default select size option
    expect(wrapper.find('.cart-size-select option')).toHaveLength(4);
  });

  it('should only render availble quantities for a current sku', () => {
    wrapper.setState({ size: 'XS' });
    expect(wrapper.find('.cart-quantity-select option')).toHaveLength(8)
  });

  it('should not render add to cart button or size select menu when current style is out of stock', () => {
    wrapper.setProps({
      currStyle: {
        skus: {
          1: {
            quantity: 0,
            size: 'M'
          },
          2: {
            quantity: 0,
            size: 'L'
          }

        }
      }
    })
    expect(wrapper.find('.cart-size-select').text()).toEqual('OUT OF STOCK');
    expect(wrapper.exists('.add-to-cart button')).toBe(false);
  });

});
