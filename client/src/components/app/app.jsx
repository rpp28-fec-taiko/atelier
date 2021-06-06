import React from 'react';
import Reviews from '../reviews/reviews.jsx';
import Overview from '../productOverview/Overview.jsx';
import QAndA from '../qAndA/qAndA.jsx';
import RelatedItems from '../relatedItems/RelatedItems.jsx';

const App = () => {
  return (
    <div className='app'>
      <Overview />
      <RelatedItems/>
      <QAndA />
      <Reviews />
    </div>
  );
};

export default App;