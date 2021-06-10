import React from 'react';

const AnswerList = ({question}) => {
  let answersData = [];

  for (var key in question) {
    answersData.push(question[key]);
  }

  let result = answersData.map((answer) =>
    <div>
      <div className="qAndA-list-answer-item" >A: {answer.body}</div>
    </div>
  );

  return (
    <div className="qAndA-list-answer-list" >
      {result}
    </div>
  );
};

export default AnswerList;