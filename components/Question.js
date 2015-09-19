// <Question {...question}
//       index={index} key={question.id} />

import React, { Component, PropTypes } from 'react';

export default class Question extends Component {
  render() {
    return (
      <li>
        <div>
          <span>{this.props.question}</span>
        </div>
        <div>
          <span>{this.props.answer}</span>
        </div>
      </li>
    );
  }
}

Question.propTypes = {
  id: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
};
