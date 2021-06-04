import React from 'react';
import { shallow } from 'enzyme';
import ProductInfo from '../../../client/src/components/productOverview/ProductInfo.jsx';

test('Checks that ProductInfo component is rendering', () => {
  const wrapper = shallow(<ProductInfo />);
  expect(wrapper.text()).toContain('Stars');
});
