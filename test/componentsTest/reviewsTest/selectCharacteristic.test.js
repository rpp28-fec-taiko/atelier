import React from 'react';
import { shallow } from 'enzyme';
import SelectCharacteristic from '../../../client/src/components/reviews/selectCharacteristic.jsx';

describe ('SelectCharacteristic', () => {
  const wrapper = shallow(<SelectCharacteristic characteristics={{1: 4}} characteristicId={1} characteristicName='Size'/>);

  it ('checks if the component exists', () => {
    expect(wrapper.find('.characteristic').exists()).toBe(true);
  });

  it('should have 5 radio buttons', () => {
    expect(wrapper.find('.radios').children().length).toBe(5)
  });
});