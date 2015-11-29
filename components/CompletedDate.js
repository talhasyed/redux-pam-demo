import React, { Component, PropTypes } from 'react';

class CompletedDate extends Component {
  render() {
    return (
      <div>
        <p>
          Enter the completion date
        </p>
        <input
          type='date' ref='input'
          onChange={(e) => this.handleDateChange(e)} value={this.props.date} />
      </div>
    );
  }

  handleDateChange(e) {
    const date = e.target.value.trim()
    this.props.onSubmit(date)
  }
}

// CompletedDate.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
//   date: PropTypes.string
// }

export default CompletedDate
