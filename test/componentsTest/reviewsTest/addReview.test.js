import React from 'react';
import { shallow } from 'enzyme';
import AddReview from '../../../client/src/components/reviews/addReview.jsx';

describe ('Add Review Btn', () => {
  const wrapper = shallow(<AddReview />, {disableLifecycleMethods: true});

  it ('checks if the component exists', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('checks that the component is rendering a button', () => {
    expect(wrapper.children().props().type).toBe('button')
  });
});