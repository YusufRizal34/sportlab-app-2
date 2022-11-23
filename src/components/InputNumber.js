import React, { useState } from "react";
import propTypes from "prop-types";

export default function InputNumber({
  isValueExported,
  initialValue,
  placeholder,
  name,
  min,
}) {
  const [value, setValue] = useState(1);

  const setChange = (e) => {
    let newValue = value + e;
    setValue(newValue);
  };

  const minus = () => {
    if (value > min) setChange(-1);
  };

  const plus = () => {
    if (value >= min) setChange(1);
  };

  if (initialValue) setValue(1);

  return (
    <div className="mb-3">
      <div className="input-group">
        <div className="input-group-prepend">
          <button className="btn minus" onClick={minus}>
            -
          </button>
        </div>
        <input
          readOnly
          min={min}
          name={name}
          className="form-control"
          placeholder={placeholder ? placeholder : "1"}
          value={value}
          onChange={setChange}
        />
        <div className="input-group-prepend">
          <button className="btn plus" onClick={plus}>
            +
          </button>
        </div>
      </div>
    </div>
  );
}

InputNumber.defaultProps = {
  min: 1,
};

InputNumber.propTypes = {
  isValueExported: propTypes.bool,
  value: propTypes.number,
  onChange: propTypes.func,
  placeholder: propTypes.string,
};
