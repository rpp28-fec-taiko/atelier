import React from 'react';
import { shallow } from 'enzyme';
import WithTracking from '../../../client/src/components/hoc/withTracking.jsx';
import {Reviews} from '../../../client/src/components/reviews/reviews.jsx';

describe ('WithTracking HOC', () => {

  it('checks if the component exists', () => {
    expect(typeof WithTracking).toBe('function')
  })

  it('checks that the component is adding a new prop', () => {
    let WithTrackingReviews = WithTracking(Reviews, 'reviews');
    let wrapper = shallow(<WithTrackingReviews />)
    expect(typeof wrapper.get(0).props.onWrappedComponentClick).toBe('function')
  });

  it('should render the wrapped component', () => {
    let WithTrackingReviews = WithTracking(Reviews, 'reviews');
    let wrapper = shallow(<WithTrackingReviews />)
    expect(wrapper.find(Reviews).exists()).toBe(true)
  })
});