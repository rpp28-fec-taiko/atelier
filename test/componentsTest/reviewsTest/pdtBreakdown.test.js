import React from 'react';
import { shallow } from 'enzyme';
import PdtBreakdown from '../../../client/src/components/reviews/pdtBreakdown.jsx';

describe ('Pdt Breakdown', () => {
  let dummyCharacteristics = {
    "Fit": {
        "id": 74402,
        "value": "3.4666666666666667"
    },
    "Length": {
        "id": 74403,
        "value": "3.1333333333333333"
    },
    "Comfort": {
        "id": 74404,
        "value": "2.6666666666666667"
    },
    "Quality": {
        "id": 74405,
        "value": "3.0000000000000000"
    }
}
  let dummyKeys = Object.keys(dummyCharacteristics);
  const wrapper = shallow(<PdtBreakdown characteristics={dummyCharacteristics}/>);

  it ('checks if the component exists', () => {
    expect(wrapper.exists('.reviews-pdt-breakdown')).toBe(true);
  });

  it('checks that Pdt Breakdown component is rendering children and the no of children depends upon the no of characteristics', () => {
    expect(wrapper.children()).toHaveLength(dummyKeys.length);
  });
});