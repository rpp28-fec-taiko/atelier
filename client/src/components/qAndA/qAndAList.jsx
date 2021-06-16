import React from 'react';
import AnswerList from './answerList.jsx';

const QAndAList = ({questions}) => (
  <div className="qAndA-list">
    {/* {console.log('questions obj inside qanda: ', questions)} */}
    {questions.length !== 0 ? questions.results.map((item, idx) =>
      <div key={idx} className="qAndA-list-question-item">
        Q: {item.question_body}<br />
        by {item.asker_name} | {item.question_date}
        <AnswerList question={item.answers} />
      </div>
      ) : null}
  </div>
);


export default QAndAList;