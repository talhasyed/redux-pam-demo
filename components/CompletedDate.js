import React, { findDOMNode, Component, PropTypes } from 'react';

export default class CompletedDate extends Component {
  render() {
    return (
      <div>
        <input type='date' ref='input' onChange={(e) => this.handleDateChange(e)}>
          {this.props.date}
        </input>

        <button onClick={(e) => this.handleDateChange(e)}>
          Enter Date
        </button>
      </div>
    );
  }

  handleDateChange(e) {
    const node = findDOMNode(this.refs.input);
    const date = node.value.trim();
    this.props.onSubmit(date);
  }
}

CompletedDate.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  date: PropTypes.string
};
