import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ActionCreators } from 'redux-undo'
import { toggleVisit, enterDate, answerQuestion } from '../actions'
import Visit from '../components/Visit'
import Footer from '../components/Footer'
import { visitsSelector } from '../selectors'

class App extends Component {
  render() {
    const { dispatch, buttonText, visitState, completedDate, questionsList, errors } = this.props

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
      </div>
    );
  }
}

export default connect(visitsSelector)(App);
