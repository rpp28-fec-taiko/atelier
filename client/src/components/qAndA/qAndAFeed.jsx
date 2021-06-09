import React from 'react';
import Question from './question.jsx';

const QAndAFeed = () => {
  return (
    <div>
      <div className="qAndA-feed" >
        <Question />
      </div>
      <div>
        <button >More Answered Questions</button>
        <button >Add A Question +</button>
      </div>
    </div>
  );
};

export default QAndAFeed;