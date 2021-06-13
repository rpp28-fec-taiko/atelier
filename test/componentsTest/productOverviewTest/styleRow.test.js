import React from 'react';
import { shallow } from 'enzyme';
import StyleRow from '../../../client/src/components/productOverview/StyleRow.jsx';
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
// <StyleThumbnail currentStyle={props.currentStyle} updateStyle={props.updateStyle} thumbnail={style.photos[0].thumbnail_url} name={style.name} key={idx}

describe ('Style Row', () => {
  const wrapper = shallow(<StyleRow currentStyle={currStyle} updateStyle={() => {}} styles={styles} />);

  it ('checks that component exists', () => {
    expect(wrapper.exists('.style-row')).toBe(true);
  });

  it('checks that component is rendering the correct number of child components', () => {
    wrapper.setProps({
      styles: [
        {
          "style_id": 1,
          "name": "one",
          "photos": [
            {
              "thumbnail_url": "urlplaceholder/style_1_photo_number_thumbnail.jpg",
              "url": "urlplaceholder/style_1_photo_number.jpg"
            }
          ]
        },
        {
          "style_id": 2,
          "name": "two",
          "photos": [
            {
              "thumbnail_url": "urlplaceholder/style_2_photo_number_thumbnail.jpg",
              "url": "urlplaceholder/style_2_photo_number.jpg"
            }
          ]
        }
      ]
    })
    expect(wrapper.children()).toHaveLength(2);
  });

});