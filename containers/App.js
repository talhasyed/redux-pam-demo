import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { toggleVisit, enterDate, answerQuestion } from '../actions';
import Visit from '../components/Visit';
import { VisitStates } from '../constants';

class App extends Component {
  render() {
    const { dispatch, buttonText, visitState, completedDate, questionsList, errors } = this.props;

    return (
      <Visit
        buttonText={buttonText}
        visitState={visitState}
        completedDate={completedDate}
        questionsList={questionsList}
        errors={errors}
        onStartVisitClick={() => dispatch(toggleVisit())}
        onSubmitEnter={date =>
          dispatch(enterDate(date))
        }
        onEnterAnswer={(questionId, answer) =>
          dispatch(answerQuestion(questionId, answer))
        } />
    );
  }
}

function select(state) {
  let buttonText = null;

  if (state.visitState === VisitStates.SCHEDULED) {
    buttonText = 'Start';
  } else if (state.visitState === VisitStates.IN_PROGRESS) {
    buttonText = 'Cancel';
  }

  return {
    visitState: state.visitState,
    completedDate: state.completedDate,
    questionsList: state.questionsList,
    errors: errors(state),
    buttonText: buttonText
  };
}

function errors(state) {
  let errors = [];

  if (state.visitState === VisitStates.IN_PROGRESS) {
    if (!state.completedDate) {
      errors.push('Please add a Date');
    }

    let missingRequiredQuestions = false;
    for (let question of state.questionsList) {
      if (question.required && !question.answer) {
        missingRequiredQuestions = true;
      }
    }

    if (missingRequiredQuestions)
      errors.push('Please answer required questions');
  }

  return errors;
}

export default connect(select)(App);
