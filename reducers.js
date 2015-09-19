import { combineReducers } from 'redux';
import { createStore } from 'redux';

import {
  START_VISIT, CANCEL_VISIT,
  RESET_DATE, ENTER_DATE,
  ANSWER_QUESTION,
} from './actions';

import {
  VisitStates, DefaultVisitState, DefaultQuestionsList
} from './constants'

function visitState(state = DefaultVisitState, action) {
  switch (action.type) {
    case START_VISIT:
      return VisitStates.IN_PROGRESS;
    case CANCEL_VISIT:
      return VisitStates.SCHEDULED;
    default:
      return state;
  }
}

function completedDate(state = null, action) {
  switch (action.type) {
    case RESET_DATE:
      return null;
    case ENTER_DATE:
      return action.date;
    default:
      return state;
  }
}

function questionsList(state = DefaultQuestionsList, action) {
  return state;
}

// Store:
const reactReduxPamApp = createStore(combineReducers({
  visitState,
  completedDate,
  questionsList
}));

export default reactReduxPamApp;
