import PropTypes from 'prop-types';
import React from 'react';

const propTypes = {
  id: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    tagLine: PropTypes.string.isRequired,
  }).isRequired,
  value: PropTypes.string.isRequired,
};

function LabeledSelect(props) {
  const {
    id,
    labelText,
    name,
    onChange,
    options,
    value,
  } = props;

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

LabeledSelect.propTypes = propTypes;

export default LabeledSelect;
