import React from 'react';
import { shallow } from 'enzyme';
import Reviews from '../../../client/src/components/reviews/reviews.jsx';

test('checks that Reviews component is rendering', () => {
  const wrapper = shallow(<Reviews />);
  expect(wrapper.text()).toEqual('RATINGS & REVIEWS ONE  TWO ');
});