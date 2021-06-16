import React from 'react';
import { shallow } from 'enzyme';
import RatingSummary from '../../../client/src/components/reviews/ratingSummary.jsx';

describe ('Rating Summary', () => {
  const wrapper = shallow(<RatingSummary noOfReviews={5} avgRating={3.5}/>);

  it ('checks if the component exists', () => {
    expect(wrapper.exists('.reviews-ratings-breakdown-summary')).toBe(true);
  });

  it('checks that Summary component is rendering children', () => {
    expect(wrapper.children()).toHaveLength(2);
  });
});