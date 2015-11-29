import React, { Component, PropTypes } from 'react';
import { VisitStates } from '../constants';
import CompletedDate from './CompletedDate';
import QuestionsList from './QuestionsList';
import Errors from './Errors';

class VisitAttributes extends React.Component {
  render() {
    const {
      visitState,
      completedDate, questionsList,
      errors,
      onSubmitEnter, onEnterAnswer
    } = this.props;

    // debugger

    if (visitState === VisitStates.IN_PROGRESS) {
      return (
        <div>
          <hr />
          <CompletedDate onSubmit={onSubmitEnter} date={completedDate} />
          <hr />
          <QuestionsList questionsList={questionsList} onEnterAnswer={onEnterAnswer} />
          <hr />
          <Errors errors={errors} />
        </div>
      );
    } else {
      return false;
    }
  }
}

// VisitAttributes.propTypes = {
//   visitState: PropTypes.string.isRequired,
//   completedDate: PropTypes.string,
//   questionsList: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     question: PropTypes.string.isRequired,
//     answer: PropTypes.string.isRequired
//   }).isRequired).isRequired,
//   errors: PropTypes.array,
//   onSubmitEnter: PropTypes.func.isRequired,
//   onEnterAnswer: PropTypes.func.isRequired
// };

export default VisitAttributes;
