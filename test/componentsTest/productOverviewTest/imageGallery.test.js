import React from 'react';
import { shallow } from 'enzyme';
import ImageGallery from '../../../client/src/components/productOverview/ImageGallery.jsx';

test('checks that Cart component renders correctly', () => {
  const wrapper = shallow(<ImageGallery />);
  expect(wrapper.text()).toContain('Image Gallery');
});