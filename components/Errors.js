import React, { Component, PropTypes } from 'react';

export default class Errors extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.errors.map((error, index) =>
            <li key={index}>{error}</li>
          )}
        </ul>
      </div>
    );
  }
}

Errors.propTypes = {
  errors: PropTypes.array
};
