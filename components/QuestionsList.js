import React, { Component, PropTypes } from 'react';
import Question from './Question';

class QuestionsList extends Component {
  render() {
    let style = {listStyle: 'none'}

debugger
    const questions = this.props.questionsList.map( (question) =>
      <Question
            {...question}
            index={question.id}
            key={question.id}
            onEnterAnswer={this.props.onEnterAnswer} />
    )

    // debugger
    // debugger
    return (


      // var children = items.map(item => <span key={item.title} />);
      // <div>{children}</div>
      <div>
        <ul style={style}>{questions}</ul>
      </div>
        // {this.props.questionsList.map((question, index) =>
        //   <Question
        //         {...question}
        //         index={index}
        //         key={question.id}
        //         onEnterAnswer={this.props.onEnterAnswer} />
        // )}
    )
  }
}

// QuestionsList.propTypes = {
//   onEnterAnswer: PropTypes.func.isRequired,
//
//   questionsList: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     question: PropTypes.string.isRequired,
//     answer: PropTypes.string.isRequired
//   }).isRequired).isRequired
// };

export default QuestionsList
