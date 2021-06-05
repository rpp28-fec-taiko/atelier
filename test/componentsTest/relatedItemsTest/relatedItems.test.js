import React from 'react';
import { shallow } from 'enzyme';
import RelatedItems from '../../../client/src/components/relatedItems/RelatedItems.jsx';

test('checks that Related Items component is rendering', () => {
  const wrapper = shallow(<RelatedItems />);
  expect(wrapper.text()).toContain('Related Products');
});