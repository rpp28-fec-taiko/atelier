import React from 'react';

const Search = ({ onReviewsSearch }) => {

  return (
    <div className='reviews-search'>
      <input type='search' name='reviews-search' id='reviews-search' placeholder='Enter Search Term' onChange={(e) => onReviewsSearch(e.target.value)} />
    </div>
  );
};

export default Search;