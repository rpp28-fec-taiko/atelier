import React from 'react';
import { shallow } from 'enzyme';
import ReviewsTile from '../../../client/src/components/reviews/reviewsTile.jsx';


describe ('Reviews Tile', () => {
  let dummyReview =  {
    "review_id": 289749,
    "rating": 2,
    "summary": "Maxime et numquam tempora et qui.",
    "recommend": true,
    "response": "HELLO",
    "body": "Et neque qui. Molestiae doloribus odio. Voluptatem ut at voluptates distinctio nihil qui. Nihil aut eveniet laudantium vero. Temporibus deleniti voluptatem veniam voluptatibus. Earum dolorem eum et dolorem assumenda sint aut.",
    "date": "2020-12-26T00:00:00.000Z",
    "reviewer_name": "Alberta85",
    "helpfulness": 37,
    "photos": [
        {
            "id": 534882,
            "url": "https://images.unsplash.com/photo-1457968867385-9f877f3f2bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        },
        {
            "id": 534883,
            "url": "https://images.unsplash.com/photo-1517720359744-6d12f8a09b10?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
        }
    ]
}
  const wrapper = shallow(<ReviewsTile review={dummyReview} searchTerm=''/>);

  it ('checks if the component exists', () => {
    expect(wrapper.exists('.reviews-tile')).toBe(true);
  });

  it('checks that Tile component is rendering children', () => {
    expect(wrapper.children()).toHaveLength(6);
  });
});