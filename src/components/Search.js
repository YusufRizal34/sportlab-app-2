import React, { useState } from "react";

export default function Search({ setQuery }) {
  const [searching, setSearching] = useState(false);
  const handleInput = (e) => {
    e.preventDefault();
    if (e.target.value !== "") setSearching(true);
    else setSearching(false);
    setQuery(e.target.value);
  };

  return (
    <div className="m-3 row">
      <input
        className="search-input col-lg-9 col-10"
        type="text"
        onChange={handleInput}
      />
      <button className="btn btn-search col-lg-3 col-2">
        {!searching && <i className="bi bi-search"></i>}
        {searching && <i className="bi bi-x-lg"></i>}
      </button>
    </div>
  );
}
