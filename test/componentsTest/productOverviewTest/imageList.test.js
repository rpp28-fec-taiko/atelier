import React from 'react';
import { shallow } from 'enzyme';
import ImageList from '../../../client/src/components/productOverview/ImageList.jsx';
import ImageThumbnail from '../../../client/src/components/productOverview/ImageThumbnail.jsx';
import Circle from '../../../client/src/components/productOverview/icons/Circle.jsx';


// PROPS: view, photos, updateMainImage, currentImage

describe ('Image List', () => {
  const wrapper = shallow(<ImageList photos={['a', 'b', 'c']} updateMainImage={() => {}} view={'default'} currentImage={''} />);

  it ('checks that component exists', () => {
    expect(wrapper.exists('.image-list-default')).toBe(true);
  });

  it('checks that component is rendering the correct number of child components', () => {
    expect(wrapper.children()).toHaveLength(3);
  });

  it ('should render image thumbnails when main image is in default view', () => {
    wrapper.setProps({ view: 'default' });
    expect(wrapper.containsMatchingElement(<ImageThumbnail />)).toBeTruthy();
  })

  it ('should render circle components when main image is in expanded view', () => {
    wrapper.setProps({ view: 'expanded' });
    expect(wrapper.containsMatchingElement(<Circle />)).toBeTruthy();
  })
});