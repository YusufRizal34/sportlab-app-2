import React, { useState } from "react";
import propTypes from "prop-types";

export default function Filter({
  isCheckBox,
  isSelect,
  title = "Title",
  name,
  data = [],
  onChange,
}) {
  const [show, setShow] = useState(false);

  const handleChanges = (e) => {
    const { checked, value } = e.target;
    if (checked) {
      onChange((prevData) => [...prevData, value]);
    } else {
      onChange((prevData) => prevData.filter((e) => e !== value));
    }
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
            {data.length > 0 &&
              data.map((item, index) => (
                <li className="list-item" key={index}>
                  <input
                    type="checkbox"
                    name={item.title}
                    id="item"
                    value={item.id}
                    onChange={handleChanges}
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
  isCheckBox: propTypes.bool,
  isSelect: propTypes.bool,
  title: propTypes.string,
  name: propTypes.string,
  data: propTypes.array,
};
