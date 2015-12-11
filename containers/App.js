import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ActionCreators } from 'redux-undo'
import { toggleVisit, enterDate, answerQuestion } from '../actions';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
import SliderMonitor from 'redux-slider-monitor';

import { visitsSelector } from '../selectors';
import Visit from '../components/Visit';
import Footer from '../components/Footer';

class App extends Component {
  render() {
    const { dispatch, buttonText, visitState, completedDate, questionsList, errors, store } = this.props;

    return (
      <div>
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

          <Footer
            onUndo={() => dispatch(ActionCreators.undo())}
            onRedo={() => dispatch(ActionCreators.redo())}
            undoDisabled={this.props.undoDisabled}
            redoDisabled={this.props.redoDisabled} />

          <DebugPanel top right bottom>
            // <DevTools store={store} monitor={LogMonitor} />
            <DevTools store={store} monitor={SliderMonitor} />

          </DebugPanel>
      </div>
    );
  }
}

export default connect(visitsSelector)(App);
