import React from 'react';
import Reviews from '../reviews/reviews.jsx';
import Overview from '../productOverview/Overview.jsx';

const App = () => {
  return (
    <div className='app'>
      <Overview />
      <div>Related Products</div>
      <div>Questions and Answers</div>
      <Reviews />
    </div>
  );
};

export default App;