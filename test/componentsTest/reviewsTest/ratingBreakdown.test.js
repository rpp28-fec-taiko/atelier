import React from 'react';
import { shallow } from 'enzyme';
import RatingBreakdown from '../../../client/src/components/reviews/ratingBreakdown.jsx';
import RatingSummary from '../../../client/src/components/reviews/ratingSummary.jsx';
import StarBreakdown from '../../../client/src/components/reviews/starBreakdown.jsx'

describe ('Rating Breakdown', () => {
  const wrapper = shallow(<RatingBreakdown totalReviews={[1]}/>);

  it ('checks if the component exists', () => {
    expect(wrapper.exists('.reviews-ratings-breakdown')).toBe(true);
  });

  it('checks that Breakdown component is rendering children', () => {
    expect(wrapper.children()).toHaveLength(3);
  });

  it('should display Rating Summary and Star Breakdown components', () => {
    expect(wrapper.find(RatingSummary).exists()).toBe(true);
    expect(wrapper.find(StarBreakdown).exists()).toBe(true);
  })
});