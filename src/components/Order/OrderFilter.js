import React from "react";
import Filter from "../Filter";

export default function OrderFilter({ filterData, setFilter }) {
  return (
    <div className="container">
      <Filter
        isSelect
        name={"category"}
        data={filterData}
        onChange={setFilter}
      />
    </div>
  );
}
