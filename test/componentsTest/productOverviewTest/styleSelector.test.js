import React from 'react';
import { shallow } from 'enzyme';
import StyleSelector from '../../../client/src/components/productOverview/StyleSelector.jsx';


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


test('checks that Styles component renders correctly', () => {
  const wrapper = shallow(<StyleSelector updateStyle={() => {}} currentStyle={currStyle} styles={styles}/>);
  expect(wrapper.text()).toContain('StyleRow');
});