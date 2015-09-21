import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { enterDate, startVisit, cancelVisit, answerQuestion } from '../actions';
import Visit from '../components/Visit'
import reactReduxPamApp from '../reducers';
import { VisitStates } from '../constants'

// Map Redux state to component props
function mapStateToProps(state)  {
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

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onEnterAnswer: (questionId, answer) => {
      dispatch(answerQuestion(questionId, answer));
    },

    onSubmitEnter: (e) => {
      dispatch(enterDate(e));
    },

    onStartVisitClick: () => {
      var visitState = reactReduxPamApp.getState().visitState;

      if (visitState === 'SCHEDULED') {
        dispatch(startVisit());
      } else {
        dispatch(cancelVisit());
      }
    }
  };
}

// Connected Component:
let App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Visit);

export default App;
