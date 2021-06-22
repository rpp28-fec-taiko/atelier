import React from 'react';
import { shallow } from 'enzyme';
import Bar from '../../../client/src/components/reviews/bar.jsx';

describe ('Bar', () => {
  const wrapper = shallow(<Bar filterReviews={() => {}}/>);

  it ('checks if the component exists', () => {
    expect(wrapper.find('.bar').exists()).toBe(true);
  });

  it('should have 3 children', () => {
    expect(wrapper.find('.bar').children().length).toBe(3)
  });

  it('should toggle the value of selected property in state', () => {
    expect(wrapper.state('selected')).toBe(false);
    wrapper.find('.bar').simulate('click');
    expect(wrapper.state('selected')).toBe(true);
  })

});