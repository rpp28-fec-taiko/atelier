import React from 'react';
import { shallow } from 'enzyme';
import Modal from '../../../client/src/components/reviews/modal.jsx';

describe ('Modal', () => {
  const wrapper = shallow(<Modal />);

  it ('checks if the component exists', () => {
    expect(wrapper.find('.reviews-tile-body-modal').exists()).toBe(true);
  });

  it('should have an image and a button as children', () => {
    expect(wrapper.find('.reviews-tile-body-modal-img img').exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
  });

});