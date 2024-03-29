import { combineReducers } from 'redux';
import undoable, { distinctState } from 'redux-undo'

import { TOGGLE_VISIT, ENTER_DATE, RESET_DATE, ANSWER_QUESTION } from './actions';
import { VisitStates, DefaultVisitState, DefaultQuestionsList } from './constants';

function visitState(state = DefaultVisitState, action) {
  switch (action.type) {
    case TOGGLE_VISIT:
      if (state === VisitStates.IN_PROGRESS)
        return VisitStates.SCHEDULED;
      else if (state === VisitStates.SCHEDULED)
        return VisitStates.IN_PROGRESS;
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
  switch (action.type) {
    case ANSWER_QUESTION:
      let index = action.questionId - 1;
      let question = Object.assign({}, state[index], {
        answer: action.answer
      });

      return [
        ...state.slice(0, index),
        question,
        ...state.slice(index + 1)
      ];

    default:
      return state;
  }
}

// Store:
const reducers = {
  visitState,
  completedDate: undoable(completedDate, { filter: distinctState() }),
  questionsList
};

export default reducers;
