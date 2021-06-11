import React from 'react';
import { shallow } from 'enzyme';
import PdtBreakdown from '../../../client/src/components/reviews/pdtBreakdown.jsx';

describe ('Pdt Breakdown', () => {
  const wrapper = shallow(<PdtBreakdown />);

  it ('checks if the component exists', () => {
    expect(wrapper.exists('.reviews-pdt-breakdown')).toBe(true);
  });
});