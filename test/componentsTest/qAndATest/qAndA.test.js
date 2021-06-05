import React from 'react';
import { shallow } from 'enzyme';
import QAndA from '../../../client/src/components/qAndA/qAndA.jsx';

test('checks that Q And A component is rendering', () => {
  const wrapper = shallow(<QAndA />);
  expect(wrapper.children()).toHaveLength(3);
});