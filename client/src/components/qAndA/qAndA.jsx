import React from 'react';
import QAndASearch from './qAndASearch.jsx';
import QAndAFeed from './qAndAFeed.jsx';

class QAndA extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      test: 'adslfkjhasdljkf'
    };

    //this.onChange = this.onChange.bind(this);
  }


  render() {
    return (
      <div className="qAndA" >
        <div className="qAndA-heading" >
          <h1 >Questions And Answers</h1>
        </div>
        <QAndASearch />
        <QAndAFeed />
      </div>
    );
  }
}

export default QAndA;
