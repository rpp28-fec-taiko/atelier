import React from 'react';
import { shallow } from 'enzyme';
import PdtBreakdown from '../../../client/src/components/reviews/pdtBreakdown.jsx';

describe ('Pdt Breakdown', () => {
  let dummyCharacteristics = [
    { id: 74406, value: '2.8', name: 'Size' },
    { id: 74407, value: '2.7', name: 'Width' },
    { id: 74408, value: '2.8', name: 'Comfort' },
    { id: 74409, value: '2.7', name: 'Quality' }
  ]

  const wrapper = shallow(<PdtBreakdown characteristics={dummyCharacteristics}/>);

  it ('checks if the component exists', () => {
    expect(wrapper.exists('.reviews-pdt-breakdown')).toBe(true);
  });

  it('checks that Pdt Breakdown component is rendering children and the no of children depends upon the no of characteristics', () => {
    expect(wrapper.children()).toHaveLength(dummyCharacteristics.length);
  });
});