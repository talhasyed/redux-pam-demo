import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleVisit, enterDate, answerQuestion } from '../actions';
import Visit from '../components/Visit';
import { visitsSelector } from '../selectors';

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

export default connect(visitsSelector)(App);
