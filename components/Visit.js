import React, { Component } from 'react';
import VisitStatus from './VisitStatus';
import CompletedDate from './CompletedDate';
import QuestionsList from './QuestionsList';
import Errors from './Errors';

export default class Visit extends React.Component {
  render() {
    const {
      buttonText, visitState, completedDate, questionsList,
      errors,
      onStartVisitClick, onSubmitEnter
    } = this.props;

    return (
      <div>
        <VisitStatus state={visitState} onStartVisitClick={onStartVisitClick} buttonText={buttonText} />
        <CompletedDate onSubmit={onSubmitEnter} date={completedDate} />
        <QuestionsList questionsList={questionsList} />
        <Errors errors={errors} />
      </div>
    );
  }
}
