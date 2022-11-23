import React, { useState } from "react";
import propTypes from "prop-types";

export default function Filter({
  isCheckBox,
  isSelect,
  title = "Title",
  name,
  data,
  onChange,
}) {
  const [show, setShow] = useState(false);

  const setChange = (e) => {
    onChange(e.target.value);
  };

  const handleToggle = () => {
    setShow(!show);
  };

  if (isSelect) {
    return (
      <div className="filter-option-container">
        <div className="row">
          <div className="col-lg-4 col-sm-12 my-sm-2">
            <select
              name={name}
              className="form-select"
              aria-label="Default select example"
            >
              <option>Open this select menu</option>
              {data.map((item, index) => (
                <option key={index} value={item.value}>
                  {item.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    );
  }

  if (isCheckBox) {
    return (
      <div className="filter">
        <label className="btn-toggle" onClick={handleToggle}>
          {title}
        </label>
        {show && (
          <ul>
            {data.map((item, index) => (
              <li className="list-item" key={index}>
                <input
                  type="checkbox"
                  name={item.title}
                  id="item"
                  value={item.value}
                  onClick={setChange}
                />
                {item.title}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

Filter.propTypes = {
  onChage: propTypes.func,
  isCheckBox: propTypes.bool,
  isSelect: propTypes.bool,
  title: propTypes.string,
  name: propTypes.string,
  data: propTypes.array,
};
