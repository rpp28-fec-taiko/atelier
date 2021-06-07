import React from 'react';
import { shallow } from 'enzyme';
import Overview from '../../../client/src/components/productOverview/Overview.jsx';

test('checks that Overview component is rendering', () => {
  const wrapper = shallow(<Overview />);
  expect(wrapper.children()).toHaveLength(4);
});