import React from 'react';
import { shallow } from 'enzyme';
import RemoveAllFilters from '../../../client/src/components/reviews/removeAllFilters.jsx';

describe ('RemoveAllFilters', () => {
  const wrapper = shallow(<RemoveAllFilters />);

  it ('checks if the component exists', () => {
    expect(wrapper.find('button').exists()).toBe(true);
  });
});