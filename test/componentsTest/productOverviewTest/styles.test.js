import React from 'react';
import { shallow } from 'enzyme';
import Styles from '../../../client/src/components/productOverview/Styles.jsx';

test('checks that Styles component renders correctly', () => {
  const wrapper = shallow(<Styles />);
  expect(wrapper.children()).toHaveLength(4);
});