import React from 'react';
import Question from './question.jsx';

const createList = (data) => {
  if (data !== undefined) {
    let list = data.map((item) =>
    <div>
      <div className="qAndA-list-item" >Q: {item}</div>
      </div>
    );
    return list;
  }
};

const QAndAList = ({questions}) => (
  <div className="qAndA-list">
    <div>{createList(questions)}</div>
  </div>
);


export default QAndAList;