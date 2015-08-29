import React, { Component } from 'react';
import VisitStatus from './VisitStatus';
import CompletedDate from './CompletedDate';
import Errors from './Errors';

export default class Visit extends React.Component {
  render() {
    const {
      buttonText, visitState, completedDate, errors,
      onStartVisitClick, onSubmitEnter
    } = this.props;

    return (
      <div>
        <VisitStatus state={visitState} onStartVisitClick={onStartVisitClick} buttonText={buttonText} />
        <CompletedDate onSubmit={onSubmitEnter} date={completedDate} />
        <Errors errors={errors}/>
      </div>
    );
  }
}
