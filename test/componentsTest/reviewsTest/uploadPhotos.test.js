import React from 'react';
import { shallow } from 'enzyme';
import UploadPhotos from '../../../client/src/components/reviews/uploadPhotos.jsx';

describe ('Upload Photos', () => {
  const wrapper = shallow(<UploadPhotos photos={[1]}/> );

  it ('checks if the component exists', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it ('should not be displayed if there are more than 5 photos', () => {
    expect(wrapper.find('.upload-photos-btn').exists()).toBe(true);
    wrapper.setProps({photos: [1, 2, 3, 4, 5, 6]});
    expect(wrapper.find('.upload-photos-btn').exists()).toBe(false);
  })

  it ('should display modal window if upload btn is clicked', () => {
    wrapper.setProps({photos: [1]});
    expect(wrapper.find('.upload-photos-modal').exists()).toBe(false);
    wrapper.find('.upload-photos-btn').simulate('click');
    expect(wrapper.find('.upload-photos-modal').exists()).toBe(true);
  });

});