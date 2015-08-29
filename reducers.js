import { combineReducers } from 'redux';
import { createStore } from 'redux';

import {
  START_VISIT, CANCEL_VISIT,
  RESET_DATE, ENTER_DATE,
  VisitStates, DefaultVisitState,
} from './actions';

/*
 * reducers
 */

function visitState(state=DefaultVisitState, action) {
  switch (action.type) {
    case START_VISIT:
      return VisitStates.IN_PROGRESS;
    case CANCEL_VISIT:
      return VisitStates.SCHEDULED;
    default:
      return state;
  }
}

function completedDate(state=null, action) {
  switch (action.type) {
    case RESET_DATE:
      return null;
    case ENTER_DATE:
      return action.date;
    default:
      return state;
  }
}

// Store:
let reactReduxPamApp = createStore(combineReducers({
  visitState,
  completedDate
}));

export default reactReduxPamApp;
