import React, { Component, PropTypes, findDOMNode } from 'react';

export default class Question extends Component {
  render() {
    return (
      <li>
        <div>
          <span>{this.props.question}</span>
        </div>
        <div>
          <input  type='text' ref='input'
                  value={this.props.answer}
                  onChange={(e) => this.handleAnswerChange(e)} />
        </div>
      </li>
    );
  }

  handleAnswerChange(e) {
    const node = findDOMNode(this.refs.input);
    const value = node.value.trim();

    this.props.onEnterAnswer(this.props.id, value);
  }
}

Question.propTypes = {
  id: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  onEnterAnswer: PropTypes.func.isRequired
};
