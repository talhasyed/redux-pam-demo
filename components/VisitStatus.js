import React, { findDOMNode, Component, PropTypes } from 'react';

export default class VisitStatus extends Component {
  render() {
    const { state, onStartVisitClick, buttonText } = this.props;

    return (
      <div>
        {state}
        <button onClick={onStartVisitClick}>
          {buttonText}
        </button>
      </div>
    );
  }
}

VisitStatus.propTypes = {
  state: PropTypes.string.isRequired
};
