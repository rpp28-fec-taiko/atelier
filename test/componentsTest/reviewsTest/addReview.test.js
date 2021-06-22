import React from 'react';
import { shallow } from 'enzyme';
import AddReview from '../../../client/src/components/reviews/addReview.jsx';

describe ('Add Review Btn', () => {
  const wrapper = shallow(<AddReview  characteristics={[1]}/>, {disableLifecycleMethods: true});

  it ('checks if the component exists', () => {
    expect(wrapper.exists()).toBe(true);
  });

  it('checks that the component is rendering a button', () => {
    expect(wrapper.children().props().type).toBe('button')
  });

  it('should display a modal window form only if the showModal state is set to true', () => {
    wrapper.setState({showModal: true});
    expect(wrapper.find('form.add-review-modal').exists()).toBe(true)
  })

  it('should render children if showModal state is set to true', () => {
    wrapper.setState({showModal: true});
    expect(wrapper.find('.add-review-modal-main').children().length).toEqual(11);
    expect(wrapper.find('.add-review-rating').exists()).toBe(true);
    expect(wrapper.find('.add-review-recommend').exists()).toBe(true);
    expect(wrapper.find('.add-review-characteristics').exists()).toBe(true);
    expect(wrapper.find('.add-review-summary').exists()).toBe(true);
    expect(wrapper.find('.add-review-body').exists()).toBe(true);
    expect(wrapper.find('.add-review-photos').exists()).toBe(true);
    expect(wrapper.find('.add-review-nickname').exists()).toBe(true);
    expect(wrapper.find('.add-review-email').exists()).toBe(true);
    expect(wrapper.find('.add-review-submit').exists()).toBe(true);
  })

  it ('should display modal window upon click', () => {
    wrapper.setState({showModal: false});
    expect(wrapper.find('form').exists()).toBe(false);
    wrapper.find('button').simulate('click');
    expect(wrapper.find('form').exists()).toBe(true);
  })

  it('should change value of recommend when the corresponding radio btns are clicked', () => {
    wrapper.setState({showModal: true});
    expect(wrapper.state('recommend')).toBe('');
    wrapper.find('.add-review-recommend').simulate('click', {target: {name: 'recommend', value:'yes'}});
    expect(wrapper.state('recommend')).toBe('yes');
  })

  it('should change value of summary when user types something', () => {
    expect(wrapper.state('summary')).toBe('');
    wrapper.find('.add-review-summary input').simulate('change', {target: {name: 'summary', value:'TESTING'}});
    expect(wrapper.state('summary')).toBe('TESTING');
  })

  it('should reset the state to initial state upon clicking close', () => {
    expect(wrapper.state('showModal')).toBe(true);
    expect(wrapper.state('recommend')).toBe('yes');
    // console.log('before', wrapper.state())
    wrapper.find('.add-review-submit .close').simulate('click');
    // console.log('after', wrapper.state())
    expect(wrapper.state('showModal')).toBe(false);
    expect(wrapper.state('recommend')).toBe('');
  })

});