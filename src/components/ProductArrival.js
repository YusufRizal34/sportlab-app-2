import React from "react";
import Masonry from "react-masonry-css";
import PanelTitle from "./PanelTitle";
import Spinner from "../components/Spinner";

export default function ProductArrival({ data, loading }) {
  const products = data;

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
  };

  if (products) {
    return (
      <section>
        <div className="container">
          <PanelTitle title="NEW ARRIVAL" />
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid pt-3"
            columnClassName="my-masonry-grid_column"
          >
            {loading && <Spinner />}
            {!loading &&
              products.map((product, index) => {
                if (index % 2 === 0) {
                  return (
                    <div className="card p-3" key={index}>
                      <img
                        className="img-cover card-img-top"
                        src={product.imageUrl}
                        alt="product"
                        style={{ maxHeight: 350 }}
                      />
                      <div className="card-body text-center">
                        <h5 className="card-title">{product.name}</h5>
                      </div>
                    </div>
                  );
                }
                return (
                  <div className="card p-3" key={index}>
                    <img
                      className="img-cover card-img-top"
                      src={product.imageUrl}
                      alt="product"
                      style={{ maxHeight: 250 }}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{product.name}</h5>
                    </div>
                  </div>
                );
              })}
          </Masonry>
        </div>
      </section>
    );
  }
}
