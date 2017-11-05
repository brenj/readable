import React, { Component } from 'react';

class LabeledInput extends Component {
  render() {
    const {
      id,
      inputPlaceholder,
      isDisabled,
      labelText,
      name,
      onChange,
      value
    } = this.props;

    return (
      <div className="row">
        <div className="six columns">
          <label htmlFor={id}>{labelText}</label>
          <input
            className="u-full-width"
            disabled={isDisabled}
            id={id}
            placeholder={inputPlaceholder}
            type="text"
            onChange={onChange}
            name={name}
            value={value}
          />
        </div>
      </div>
    );
  }
}

export default LabeledInput;
