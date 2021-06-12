import React from 'react';
import { shallow } from 'enzyme';
import ImageThumbnail from '../../../client/src/components/productOverview/ImageThumbnail.jsx';


const currentImage = {
  url: 'image.jpeg',
  thumbnail_url: 'image-thumbnail.jpeg'
}

test ('checks that component exists', () => {
  const wrapper = shallow(<ImageThumbnail updateMainImage={() => {}} currentImage={currentImage} thumbnail={''}/>);
  expect(wrapper.exists('.image-thumbnail')).toBe(true);
});

test('checks that image thumbnail is given the correct classname if it matches the currently displayed image', () => {
  const wrapper = shallow(<ImageThumbnail updateMainImage={() => {}} currentImage={currentImage} thumbnail={'image-thumbnail.jpeg'}/>);
  expect(wrapper.find('.current-image-selection')).toHaveLength(1);
  expect(wrapper.find('.non-current-image')).toHaveLength(0);
});

test('checks that image thumbnail is given correct classname if it does not match the currently displayed image', () => {
  const wrapper = shallow(<ImageThumbnail updateMainImage={() => {}} currentImage={currentImage} thumbnail={'different'}/>);
  expect(wrapper.find('.current-image-selection')).toHaveLength(0);
  expect(wrapper.find('.non-current-image')).toHaveLength(1);
});