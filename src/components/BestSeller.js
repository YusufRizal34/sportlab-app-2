import React from "react";
import ProductList from "./ProductList";
import PanelTitle from "./PanelTitle";

export default function BestSeller({ data, loading }) {
  return (
    <section>
      <div className="container">
        <PanelTitle title="BEST SELLER" isCenter isMainTitle />
        <ProductList data={data} loading={loading} />
      </div>
    </section>
  );
}
