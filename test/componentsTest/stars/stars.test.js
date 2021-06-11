import React from 'react';
import { shallow } from 'enzyme';
import Stars from '../../../client/src/components/stars/stars.jsx';

describe ('Stars', () => {
  const wrapper = shallow(<Stars size={24} rating={2.4567}/>);

  it ('checks if the component exists', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it ('should render 5 stars', () => {
    expect(wrapper.children()).toHaveLength(5)
  })
});