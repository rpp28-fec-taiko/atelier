import React from 'react';
import AnswerList from './answerList.jsx';

const QAndAList = ({questions}) => (
  <div className="qAndA-list">
    {console.log('questions obj inside qanda: ', questions)}
    {questions.length !== 0 ? questions.results.map((item) =>
      <div className="qAndA-list-question-item">
        Q: {item.question_body}<br />
        by {item.asker_name} | {item.question_date} | Helpful? yes({item.question_helpfulness})
         <button > Add Answer</button>
        <AnswerList answers={item.answers} />
      </div>
      ) : null}
  </div>
);


export default QAndAList;