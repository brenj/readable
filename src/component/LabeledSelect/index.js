import React, { Component } from 'react';

class LabeledSelect extends Component {
  render() {
    const {
      id,
      labelText,
      name,
      onChange,
      options,
      value,
    } = this.props;

    return (
      <div className="row">
        <div className="six columns">
          <label htmlFor={id}>{labelText}</label>
          <select
            className="u-full-width"
            id={id}
            onChange={onChange}
            name={name}
            value={value}
          >
            {options.map(option => (
              <option
                key={option.value}
                value={option.value}
              >
                {option.text}
              </option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default LabeledSelect;
