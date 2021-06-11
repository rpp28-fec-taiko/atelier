import React from 'react';

const AnswerList = ({answers}) => {
  let answersData = [];

  for (var key in answers) {
    answersData.push(key);
  }

  let result = answersData.map((answer) =>
    <div>
      <div className="qAndA-list-answer-item" >A: {answers[answer].body}</div>
      {answers[answer].photos.length !== 0 ? answers[answer].photos.map((photo) =>
        <img className="qAndA-list-answer-item-picture" src={photo} ></img> ) : null}
      <div>
      by {answers[answer].answerer_name} - {answers[answer].date} | Helpful? yes({answers[answer].helpfulness})
      <button >Report</button>
      </div>
    </div>
  );

  return (
    <div className="qAndA-list-answer-list" >
      {result}
    </div>
  );
};

export default AnswerList;