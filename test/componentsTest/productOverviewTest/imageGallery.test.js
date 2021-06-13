import React from 'react';
import { shallow } from 'enzyme';
import ImageGallery from '../../../client/src/components/productOverview/ImageGallery.jsx';
import ChevronRight from '../../../client/src/components/productOverview/icons/ChevronRight.jsx';
import ChevronLeft from '../../../client/src/components/productOverview/icons/ChevronLeft.jsx';
// import App from '../../../client/src/components/app/app.jsx';
// import Overview from '../../../client/src/components/productOverview/Overview.jsx';

const style = {
  photos: [ {url: 'url1'}, {url: 'url2'}, {url: 'url3'}]
};

const currentImage = {
  url: 'url1'
}

describe('Image Gallery', () => {
  const wrapper = shallow(<ImageGallery currentStyle={style} />);
  wrapper.setState({ currentIndex: 1 , currentImage: currentImage });

  it('checks that component renders in default view', () => {
    wrapper.setProps({ expanded: false });
    expect(wrapper.exists('.image-gallery-default')).toBe(true);
  });

  it('checks that component renders in expanded view', () => {
    wrapper.setProps({ expanded: true });
    expect(wrapper.exists('.image-gallery-expanded')).toBe(true);
  });

  // xit('should update main image and increment current index when nextImage is invoked', () => {

  // });

  // xit('should update main image and decrement current index when prevImage is invoked', () => {

  // });





});
