import React, { Component } from 'react';
import VisitStatus from './VisitStatus';
import VisitAttributes from './VisitAttributes';

class Visit extends React.Component {
  render() {
    const {
      visitState, completedDate, questionsList,
      errors,
      onStartVisitClick, onSubmitEnter, onEnterAnswer
    } = this.props;

    return (
      <div>
        <VisitStatus
          state={visitState}
          onStartVisitClick={onStartVisitClick} />

        <VisitAttributes
          visitState={visitState}
          completedDate={completedDate}
          questionsList={questionsList}
          errors={errors}
          onSubmitEnter={onSubmitEnter}
          onEnterAnswer={onEnterAnswer} />
      </div>
    );
  }
}

export default Visit;
