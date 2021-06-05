import React from 'react';
import Question from './question.jsx';

const QAndAFeed = () => {
  return (
    <div className="qAndA-feed" >
      <Question />
      <button >More Answers</button>
      <button >Add A Question +</button>
    </div>
  );
};

export default QAndAFeed;