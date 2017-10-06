import React, { Component } from 'react';

class LabeledInput extends Component {
  render() {
    const { focus, id, inputPlaceholder, labelText } = this.props;

    return (
      <div className="row">
        <div className="six columns">
          <label htmlFor={id}>{labelText}</label>
          <input
            autoFocus={focus}
            className="u-full-width"
            id={id}
            placeholder={inputPlaceholder}
            type="text"
          />
        </div>
      </div>
    );
  }
}

LabeledInput.defaultProps = {
  focus: false,
};

export default LabeledInput;
