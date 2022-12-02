import React, { useState } from "react";

export default function Modal({ open, setClose, onSubmit }) {
  const [input, setInput] = useState(["", "", ""]);

  const handleInput = (e) => {
    const { maxLength, value, name } = e.target;
    const [fieldName, fieldIndex] = name.split("-");

    let fieldIntIndex = parseInt(fieldIndex, 10);

    const currentfield = document.querySelector(
      `input[name=field-${fieldIntIndex}]`
    );
    const nextfield = document.querySelector(
      `input[name=field-${fieldIntIndex + 1}]`
    );

    let newInput = [...input];
    newInput[fieldIntIndex - 1] = value;
    setInput(newInput);

    if (value.length >= maxLength) {
      currentfield.className = "col-3 text-center active-success";
      if (nextfield !== null && fieldIntIndex < 3) {
        nextfield.focus();
      }
    } else {
      currentfield.className = "col-3 text-center active-danger";
    }
  };

  const handleSubmit = () => {
    const combineInput = input.reduce((prev, next) => prev.concat(next));
    if (combineInput.length === 9) onSubmit(combineInput);
  };

  if (open === false) return null;

  return (
    <div className="modal-background">
      <div className="modal-container">
        <div className="modal-header">
          <button className="btn close-button" onClick={setClose}>
            <i className="bi bi-x"></i>
          </button>
        </div>
        <div className="modal-body">
          <p>Masukkaan PIN</p>
          <div className="row d-flex justify-content-evenly input-pin mx-2">
            <input
              className="col-3 text-center"
              type="text"
              name="field-1"
              maxLength={3}
              onChange={(e) => {
                handleInput(e);
              }}
            />
            -
            <input
              className="col-3 text-center"
              type="text"
              name="field-2"
              maxLength={3}
              onChange={(e) => {
                handleInput(e);
              }}
            />
            -
            <input
              className="col-3 text-center"
              type="text"
              name="field-3"
              maxLength={3}
              onChange={(e) => {
                handleInput(e);
              }}
            />
          </div>
        </div>
        <div className="modal-footer">
          <button onClick={handleSubmit} className="btn submit-button">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
