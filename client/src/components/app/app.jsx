import React from 'react';
import Reviews from '../reviews/reviews.jsx';

const App = () => {
  return (
    <div className='app'>
      <div>Overview</div>
      <div>Related Products</div>
      <div>Questions and Answers</div>
      <Reviews />
    </div>
  );
};

export default App;