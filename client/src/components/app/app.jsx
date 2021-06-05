import React from 'react';
import Reviews from '../reviews/reviews.jsx';
import Overview from '../productOverview/Overview.jsx';
import QAndA from '../qAndA/qAndA.jsx';

const App = () => {
  return (
    <div className='app'>
      <Overview />
      <div>Related Products</div>
      <QAndA />
      <Reviews />
    </div>
  );
};

export default App;