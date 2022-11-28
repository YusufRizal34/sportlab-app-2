import React from "react";
import Spinner from "../components/Spinner";
import { MoneyFormater } from "../utils/MoneyFormater";
import propTypes from "prop-types";

export default function ProductList({ isRow = 3, data = [], loading }) {
  return (
    <div className="row">
      {loading && <Spinner />}
      {data.length < 1 && (
        <h5 className="text-center p-3">Barang tidak ditemukan</h5>
      )}
      {data &&
        !loading &&
        data.map((item, index) => {
          return (
            <div className={`col-lg-${isRow} col-sm-6 col-12 p-2`} key={index}>
              <a href={`/detail-page/${item.id}`}>
                <div className="card shadow product-container">
                  <div className="img-container p-2">
                    <img
                      src={`/${item.imageUrl}`}
                      className="img-contain"
                      alt="alternative"
                    />
                  </div>
                  <div className="card-body">
                    <div>{item.categoryId}</div>
                    <h4>{item.name}</h4>
                    <div className="price">
                      {MoneyFormater(item.price, "Rp. ")}
                    </div>
                    <div className="star-container d-flex">
                      <i
                        className="bi bi-star-fill"
                        style={{ color: "#f7da23" }}
                      ></i>
                      <div className="item-label">{item.star}</div> |
                      <div className="item-label">{item.sold} Terjual</div>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
    </div>
  );
}

ProductList.propTypes = {
  isRow: propTypes.number,
};
