import React from 'react';
import Question from './question.jsx';

const createAnswersList = (data) => {
  let answersData = [];
  for (var key in data) {
    answersData.push(data[key]);
  }
  let result = answersData.map((answer) =>
    <div>
      <div className="qAndA-list-answer-item" >A: {answer.body}</div>
    </div>
  );
  return result;
};

const QAndAList = ({questions}) => (
  <div className="qAndA-list">
    {console.log('questions obj inside qanda: ', questions)}
    {questions.length !== 0 ? questions.results.map((item) =>
      <div className="qAndA-list-question-item">
        Q: {item.question_body}<br />
        by {item.asker_name} | {item.question_date}
        {createAnswersList(item.answers)}
      </div>
      ) : null}
  </div>
);


export default QAndAList;