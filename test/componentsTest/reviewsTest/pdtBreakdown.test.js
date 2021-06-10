import React from 'react';
import { shallow } from 'enzyme';
import PdtBreakdown from '../../../client/src/components/reviews/pdtBreakdown.jsx';

describe ('Pdt Breakdown', () => {
  const wrapper = shallow(<PdtBreakdown />);

  it ('checks if the component exists', () => {
    expect(wrapper.exists('.reviews-pdt-breakdown')).toBe(true);
  });

  // it('checks that Sort component is rendering children', () => {
  //   expect(wrapper.children()).toHaveLength(2);
  // });

  // it ('should display the correct criteria value', () => {
  //   wrapper.setProps({reviewCriteria: 'helpful'});
  //   expect(wrapper.find('select').props().value).toBe('helpful')
  // })
});