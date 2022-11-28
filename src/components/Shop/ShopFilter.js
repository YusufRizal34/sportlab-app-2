import React from "react";
import Filter from "../Filter";

export default function ShopFilter({ setFilter, filterData }) {
  return (
    <div className="row m-3">
      <div className="col-lg-12 col-sm-6 mb-lg-3 list-container">
        <li className="list-item">
          <Filter
            isCheckBox
            data={filterData}
            title={"Kategori"}
            onChange={setFilter}
          />
        </li>
      </div>
    </div>
  );
}
