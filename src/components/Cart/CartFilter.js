import React from "react";
import Filter from "../Filter";

export default function ProductFilter() {
  const data = [
    { value: "adidas", title: "Adidas" },
    { value: "adidas", title: "Adidas" },
    { value: "adidas", title: "Adidas" },
  ];
  return (
    <div className="container">
      <Filter isSelect name={"category"} data={data} />
    </div>
  );
}
