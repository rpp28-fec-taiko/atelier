import React from 'react';
import QAndASearch from './qAndASearch.jsx';
import QAndAFeed from './qAndAFeed.jsx';

class QAndA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: null
    };

    this.getAllQuestions = this.getAllQuestions.bind(this);
  }

  getAllQuestions = () => {
    return fetch(`http://localhost:3000/qa/questions/?productId=${this.props.productId}`)  //
    .then((resp) => resp.json())
    .then((allQuestions) => {
      console.log(allQuestions)
    })
    .catch((err) => {
      console.log('ERROR GETTING ALL QUESTIONS');
    });
  }

  //we need to set state.questions
  //? how?

  //we need to make a get request to get the data
  //=> make an ajax request for the given product id number (or use fetch?)

  //once we get the data, what do we do?
  //we need to set the state of questions = to the
  componentDidMount() {
    this.getAllQuestions();
  }

  render() {
    return (
      <div className="qAndA" >
        <div className="qAndA-heading" >
          <h1 >Questions And Answers</h1>
        </div>
        <div className="qAndA-body">
          <QAndASearch />
          <QAndAFeed questions={this.state.questions} />
        </div>
      </div>
    );
  }
}

export default QAndA;
