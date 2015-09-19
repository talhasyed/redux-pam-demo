import React, { Component, PropTypes } from 'react';
import Question from './Question';

export default class QuestionsList extends Component {
  render() {
    return (
      <ul>
        {this.props.questionsList.map((question, index) =>
          <Question {...question}
                index={index} key={question.id} />
        )}
      </ul>
    );
  }
}

QuestionsList.propTypes = {
  questionsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired
  }).isRequired).isRequired
};
