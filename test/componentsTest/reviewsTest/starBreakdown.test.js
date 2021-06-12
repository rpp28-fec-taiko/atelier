import React from 'react';
import { shallow } from 'enzyme';
import StarBreakdown from '../../../client/src/components/reviews/starBreakdown.jsx';
import Bar from '../../../client/src/components/reviews/Bar.jsx'

describe ('Star Breakdown', () => {
  const wrapper = shallow(<StarBreakdown selectedFilters={[]} totalReviews={[1,2]}/>);

  it ('checks if the component exists', () => {
    expect(wrapper.exists('.reviews-ratings-breakdown-star')).toBe(true);
  });

  it('checks that Summary component is rendering children', () => {
    expect(wrapper.children()).toHaveLength(7);
  });

  it('should always display 5 bars', () => {
    expect(wrapper.find(Bar)).toHaveLength(5)
  })
});