import { VisitStates } from '../constants';
import React, { findDOMNode, Component, PropTypes } from 'react';

class VisitStatus extends Component {
  render() {
    const { state, onStartVisitClick } = this.props;
    let buttonText = this.buttonText(state);

    return (
      <div>
        {state}
        <button onClick={onStartVisitClick}>
          {buttonText}
        </button>
      </div>
    );
  }

  buttonText(visitState) {
    if (visitState === VisitStates.SCHEDULED) {
      return 'Start';
    } else {
      return 'Cancel';
    }
  }
}

VisitStatus.propTypes = {
  state: PropTypes.string.isRequired
};

export default VisitStatus;
