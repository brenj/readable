import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  id: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  isRequired: PropTypes.bool.isRequired,
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

function LabeledInput(props) {
  const {
    id,
    inputPlaceholder,
    isDisabled,
    name,
    onChange,
    isRequired,
    value,
  } = props;

  let { labelText } = props;
  if (isRequired) {
    labelText = `${labelText}*`;
  }

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

LabeledInput.propTypes = propTypes;

export default LabeledInput;
