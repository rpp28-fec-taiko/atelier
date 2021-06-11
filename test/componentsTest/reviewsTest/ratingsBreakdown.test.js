import React from 'react';
import { shallow } from 'enzyme';
import RatingsBreakdown from '../../../client/src/components/reviews/ratingsBreakdown.jsx';

describe ('Ratings Breakdown', () => {
  const wrapper = shallow(<RatingsBreakdown />);

  it ('checks if the component exists', () => {
    expect(wrapper.exists('.reviews-ratings-breakdown')).toBe(true);
  });
});