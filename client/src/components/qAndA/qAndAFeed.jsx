import React from 'react';
import Question from './question.jsx';

const createList = (data) => {
  if (data !== undefined) {
    let list = data.map((item) =>
      <li className="qAndA-list-item" >Q: {item}</li>
    );
    return list;
  }
};

const QAndAFeed = ({questions}) => (
  <div>{createList(questions)}</div>
);


export default QAndAFeed;