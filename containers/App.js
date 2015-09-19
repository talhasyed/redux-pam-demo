import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { enterDate, startVisit, cancelVisit } from '../actions';
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

  if (state.visitState === VisitStates.IN_PROGRESS && !state.completedDate) {
    errors.push('Please add a Date');
  }

  return errors;
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
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
