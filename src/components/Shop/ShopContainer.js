import React, { useEffect } from "react";
import ProductList from "../ProductList";
import Search from "../Search";
import ShopFilter from "./ShopFilter";

export default function ShopContainer({
  data,
  loading,
  setQuery,
  setFilter,
  filterData,
}) {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <Search setQuery={setQuery} />
            <ShopFilter setFilter={setFilter} filterData={filterData} />
          </div>
          <div className="col-lg-9 col-sm-12">
            <ProductList isRow={4} data={data} loading={loading} />
          </div>
        </div>
      </div>
    </section>
  );
}
