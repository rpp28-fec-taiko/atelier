import React from 'react';
import { shallow } from 'enzyme';
import Sort from '../../../client/src/components/reviews/sort.jsx';

describe ('Sort Dropdown', () => {
  const wrapper = shallow(<Sort />);

  it ('checks if the widget exists', () => {
    expect(wrapper.exists('.reviews-sort')).toBe(true);
  });

  it('checks that Sort component is rendering children', () => {
    expect(wrapper.children()).toHaveLength(2);
  });

  it ('should display the correct criteria value', () => {
    wrapper.setProps({reviewCriteria: 'helpful'});
    let test = wrapper.find('select');
    expect(wrapper.find('select').props().value).toBe('helpful')
  })
});