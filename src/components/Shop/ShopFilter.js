import React from "react";
import Filter from "../Filter";

export default function ShopFilter({ setFilter, filterData }) {
  return (
    <div className="row px-2">
      <div className="col-lg-12 col-sm-6 mb-lg-3 list-container">
        <li className="list-item">
          <Filter
            isCheckBox
            data={filterData.category}
            title={"Kategori"}
            onChange={setFilter}
          />
        </li>
      </div>
      <div className="col-lg-12 col-sm-6 mb-lg-3 list-container">
        <li className="list-item">
          <Filter
            isCheckBox
            data={filterData.brand}
            title={"Brand"}
            onChange={setFilter}
          />
        </li>
      </div>
    </div>
  );
}
