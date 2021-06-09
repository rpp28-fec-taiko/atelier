import React from 'react';
import { shallow } from 'enzyme';
import ImageGallery from '../../../client/src/components/productOverview/ImageGallery.jsx';

const style = {
  photos: [
    {
      url: 'url'
    }
  ]
};

test('checks that Image Gallery component renders correctly', () => {
  const wrapper = shallow(<ImageGallery currentStyle={style}/>);
  expect(wrapper.children()).toHaveLength(1);
});