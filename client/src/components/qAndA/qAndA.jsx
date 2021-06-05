import React from 'react';
import QAndASearch from './qAndASearch.jsx';
import QAndAFeed from './qAndAFeed.jsx';

class QAndA extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="qAndA" >
        <div className="qAndA-heading" >
          <h2 >Questions And Answers</h2>
        </div>
        <QAndASearch />
        <QAndAFeed />
      </div>
    );
  }
}

export default QAndA;
