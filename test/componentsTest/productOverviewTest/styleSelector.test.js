import React from 'react';
import { shallow } from 'enzyme';
import StyleSelector from '../../../client/src/components/productOverview/StyleSelector.jsx';
import StyleRow from '../../../client/src/components/productOverview/StyleRow.jsx';

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

describe('Style Selector', () => {
  const wrapper = shallow(<StyleSelector updateStyle={() => {}} currentStyle={currStyle} styles={styles}/>);

  it('checks that component renders correctly', () => {
    expect(wrapper.exists('.style-selector')).toBe(true);
  });

  it('should split thumbnails into rows of four', () => {
    let nineStyles = [];
    for (let i = 0; i < 9; i++) {
      nineStyles.push({"style_id": i})
    }
    wrapper.setProps({ styles: nineStyles });
    // if 9 styles there should be two rows of 4 and one row of 1
    expect(wrapper.find(StyleRow)).toHaveLength(3);
  });


});

