import React from 'react';
import { createStore } from 'redux';
import { Provider, connect } from 'react-redux';
import { combineReducers } from 'redux';

// React component
class Visit extends React.Component {
  render() {
    const { buttonText, visitState, onStartVisitClick } = this.props;

    return (
      <div>
        {visitState}
        <button onClick={onStartVisitClick}>
          {buttonText}
        </button>
      </div>
    );
  }
}

/*
 * action types
 */

export const START_VISIT = 'START_VISIT';
export const CANCEL_VISIT = 'CANCEL_VISIT';

export const ENTER_DATE = 'ENTER_DATE';
export const RESET_DATE = 'RESET_DATE';

/*
 * other constants
 */

export const VisitStates = {
  SCHEDULED: 'SCHEDULED',
  IN_PROGRESS: 'IN_PROGRESS',
};

export const DefaultVisitState = VisitStates.SCHEDULED;

/*
 * action creators
 */

export function startVisit() {
  return { type: START_VISIT };
}

export function cancelVisit() {
  return { type: CANCEL_VISIT };
}

export function enterDate(date) {
  return { type: ENTER_DATE, date };
}

export function resetDate() {
  return { type: RESET_DATE };
}

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

function commpletedDate(state=null, action) {
  switch (action.type) {
    case RESET_DATE:
      return null;
    case ENTER_DATE:
      return state;
    default:
      return state;
  }
}

// Store:
let store = createStore(combineReducers({
  visitState,
  commpletedDate,
}));

// Map Redux state to component props
function mapStateToProps(state)  {
  var buttonText;

  if (state.visitState === VisitStates.SCHEDULED) {
    buttonText = 'Start';
  } else if (state.visitState === VisitStates.IN_PROGRESS) {
    buttonText = 'Cancel';
  }

  return {
    buttonText: buttonText,
    visitState: state.visitState,
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {

    onStartVisitClick: () => {
      console.log(store.getState())
      dispatch(startVisit())
    },
  };
}

// Connected Component:
let App = connect(
  mapStateToProps,
  mapDispatchToProps
)(Visit);

React.render(
  <Provider store={store}>
    {() => <App />}
  </Provider>,
  document.getElementById('root')
);
