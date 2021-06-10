import React from 'react';
import { shallow } from 'enzyme';
import Reviews from '../../../client/src/components/reviews/reviews.jsx';
import RatingsBreakdown from '../../../client/src/components/reviews/ratingsBreakdown.jsx';
import PdtBreakdown from '../../../client/src/components/reviews/pdtBreakdown.jsx';
import Sort from '../../../client/src/components/reviews/sort.jsx';
import Search from '../../../client/src/components/reviews/search.jsx';
import ReviewsList from '../../../client/src/components/reviews/reviewsList.jsx';
import MoreReviews from '../../../client/src/components/reviews/moreReviews.jsx';
import AddReview from '../../../client/src/components/reviews/addReview.jsx';
import ReviewsTile from '../../../client/src/components/reviews/reviewsTile.jsx';


describe ('Reviews Widget', () => {
  const wrapper = shallow(<Reviews currentReviews={[]}/>);

  it ('checks if the widget exists', () => {
    expect(wrapper.exists('.reviews')).toBe(true);
  });

  it('checks that Reviews component is rendering children', () => {
    expect(wrapper.children()).toHaveLength(2);
  });

  it('should render class "reviews-main" dynamically', () => {
    expect(wrapper.find('.reviews-main').exists()).toBe(false);

    wrapper.setProps({ currentReviews: [1], nextReviews: [2] });
    expect(wrapper.find('.reviews-main').exists()).toBe(true);
  })

  it ('shoudl render the following components: RatingsBreakdown, PdtBreakdown, Sort, Search, ReviewsList, MoreReviews and AddReview', () => {
    wrapper.setProps({ currentReviews: [1], nextReviews: [2] });

    expect(wrapper.find(RatingsBreakdown).exists()).toBe(true);
    expect(wrapper.find(PdtBreakdown).exists()).toBe(true);
    expect(wrapper.find(Sort).exists()).toBe(true);
    expect(wrapper.find(Search).exists()).toBe(true);
    expect(wrapper.find(ReviewsList).exists()).toBe(true);
    expect(wrapper.find(MoreReviews).exists()).toBe(true);
    expect(wrapper.find(AddReview).exists()).toBe(true);

    expect(wrapper.find(ReviewsTile).exists()).toBe(false);
  })
});