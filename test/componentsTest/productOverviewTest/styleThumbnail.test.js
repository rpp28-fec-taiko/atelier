import React from 'react';
import { shallow } from 'enzyme';
import StyleThumbnail from '../../../client/src/components/productOverview/StyleThumbnail.jsx';


const styles = [
  {
    "style_id": 1,
    "name": "Forest Green & Black",
    "original_price": "140",
    "sale_price": "0",
    "default?": true,
    "photos": [
      {
        "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
        "url": "urlplaceholder/style_1_photo_number.jpg"
      }
    ],
  }

]

const currStyle = {
  name: 'style',
}

test ('checks that component exists', () => {
  const wrapper = shallow(<StyleThumbnail updateStyle={() => {}} currentStyle={currStyle} name={'style'}/>);
  expect(wrapper.exists('.style-thumbnail')).toBe(true);
});

test('checks that thumbnail is given the correct classname if it matches the currently displayed image', () => {
  const wrapper = shallow(<StyleThumbnail updateStyle={() => {}} currentStyle={currStyle} name={'style'}/>);
  expect(wrapper.find('.current-style-selection')).toHaveLength(1);
  expect(wrapper.find('.non-current-style')).toHaveLength(0);
});

test('checks that thumbnail is given correct classname if it does not match the currently displayed image', () => {
  const wrapper = shallow(<StyleThumbnail updateStyle={() => {}} currentStyle={currStyle} name={'different'}/>);
  expect(wrapper.find('.current-style-selection')).toHaveLength(0);
  expect(wrapper.find('.non-current-style')).toHaveLength(1);
});