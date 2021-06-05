import React from 'react';
import { shallow } from 'enzyme';
import Cart from '../../../client/src/components/productOverview/Cart.jsx';

test('checks that Cart component renders correctly', () => {
  const wrapper = shallow(<Cart />);
  expect(wrapper.text()).toContain('Size');
});