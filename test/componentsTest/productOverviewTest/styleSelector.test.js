import React from 'react';
import { shallow } from 'enzyme';
import StyleSelector from '../../../client/src/components/productOverview/StyleSelector.jsx';

test('checks that Styles component renders correctly', () => {
  const wrapper = shallow(<StyleSelector />);
  expect(wrapper.children()).toHaveLength(3);
});