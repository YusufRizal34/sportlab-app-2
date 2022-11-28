import React from "react";
import propTypes from "prop-types";

export default function InputNumber({
  currentValue,
  placeholder,
  min,
  onChange,
}) {
  const setChange = (e) => {
    let newQty = currentValue + e;
    onChange(newQty);
  };

  const minus = () => {
    if (currentValue > min) setChange(-1);
  };

  const plus = () => {
    if (currentValue >= min) setChange(1);
  };

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
          className="form-control"
          placeholder={placeholder ? placeholder : "1"}
          value={currentValue}
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
  item: propTypes.object,
  currentValue: propTypes.number,
  onChange: propTypes.func,
  placeholder: propTypes.string,
};
