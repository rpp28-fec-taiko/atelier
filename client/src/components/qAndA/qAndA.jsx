import React from 'react';
import QAndASearch from './qAndASearch.jsx';
import QAndAList from './qAndAList.jsx';
import QAndAOptions from './qAndAOptions.jsx';


class QAndA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };

    this.getAllQuestions = this.getAllQuestions.bind(this);
  }

  getAllQuestions = () => {
    return fetch(`http://localhost:3000/qa/questions/?productId=${this.props.productId}`)  //
    .then((resp) => resp.json())
    .then((allQuestions) => {
      console.log(allQuestions.results);
      let questionsList = []
      for (let i = 0; i < allQuestions.results.length; i++) {
        questionsList.push(allQuestions.results[i].question_body);
      }
      this.setState({questions: questionsList})
      console.log(this.state);
    })
    .catch((err) => {
      console.log('ERROR GETTING ALL QUESTIONS', err);
    });
  }


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
          <QAndAList questions={this.state.questions} />
          <QAndAOptions />
        </div>
      </div>
    )
  }
}


export default QAndA;
