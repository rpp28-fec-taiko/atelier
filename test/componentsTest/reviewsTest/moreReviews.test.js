import React from 'react';
import { shallow } from 'enzyme';
import MoreReviews from '../../../client/src/components/reviews/moreReviews.jsx';

describe ('More Reviews Btn', () => {
  const wrapper = shallow(<MoreReviews />);

  it ('checks if the component exists', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('checks that the component is rendering a button', () => {
    expect(wrapper.children().props().type).toBe('button')
  });
});