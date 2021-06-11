import React from 'react';
import { shallow } from 'enzyme';
import Search from '../../../client/src/components/reviews/search.jsx';

describe ('Search', () => {
  const wrapper = shallow(<Search />);

  it ('checks if the component exists', () => {
    expect(wrapper.exists('.reviews-search')).toBe(true);
  });
});