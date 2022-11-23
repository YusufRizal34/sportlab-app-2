import React from "react";
import Filter from "../Filter";

export default function ShopFilter({ filteredData }) {
  const setFilter = (e) => {
    filteredData.push(e);
    console.log(filteredData);
  };

  const data = [
    { title: "Sepatu", value: "sepatu" },
    { title: "Baju", value: "baju" },
    { title: "Tas", value: "tas" },
    { title: "Jaket", value: "jaket" },
  ];

  return (
    <div className="row m-3">
      <div className="col-lg-12 col-sm-6 mb-lg-3 list-container">
        <li className="list-item">
          <Filter
            isCheckBox
            data={data}
            title={"Kategori"}
            onChange={setFilter}
          />
        </li>
      </div>
      {/* <div className="col-lg-12 col-sm-6 mb-lg-3 list-container">
        <li className="list-item">
          <Filter isCheckBox data={data} title={"Brand"} />
        </li>
      </div>
      <div className="col-lg-12 col-sm-6 mb-lg-3 list-container">
        <li className="list-item">
          <Filter isCheckBox data={data} />
        </li>
      </div> */}
    </div>
  );
}
