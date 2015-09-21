import React, { Component, PropTypes } from 'react';
import Question from './Question';

export default class QuestionsList extends Component {
  render() {
    let style = {listStyle: 'none'};

    return (
      <ul style={style}>
        {this.props.questionsList.map((question, index) =>
          <Question {...question}
                index={index} key={question.id} onEnterAnswer={this.props.onEnterAnswer} />
        )}
      </ul>
    );
  }
}

QuestionsList.propTypes = {
  onEnterAnswer: PropTypes.func.isRequired,

  questionsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
  }).isRequired).isRequired
};
