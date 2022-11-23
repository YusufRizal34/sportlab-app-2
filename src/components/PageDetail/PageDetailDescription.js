import React, { useState } from "react";
import Spinner from "../../components/Spinner";
import { MoneyFormater } from "../../utils/MoneyFormater";
import InputNumber from "../InputNumber";

export default function PageDetailDescription({
  data,
  productReceipt,
  loading,
  errMessage,
}) {
  const [qty, setQty] = useState(1);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const productData = {
      productId: data?.id,
    };
    await productReceipt(productData);
  };
  const handleFavorite = () => {};

  return (
    <div>
      {loading && <Spinner />}
      {!loading && (
        <div>
          <h4 className="item-title">{data.name}</h4>
          <div className="mb-2 price">
            {MoneyFormater(data.price.toString(), "Rp. ")}
          </div>
          <div className="star-container d-flex mb-2">
            <i className="bi bi-star-fill" style={{ color: "#f7da23" }}></i>
            <div className="item-label">{data.star}</div> |
            <div className="item-label">{data.sold} Terjual</div>
          </div>
          <InputNumber min={1} name="qty" />
          <div className="d-flex">
            <button
              className="flex-grow-1 me-2 btn btn-hero"
              onClick={handleSubmit}
            >
              Tambah ke keranjang
            </button>
            <button className="btn btn-favorite" onClick={handleFavorite}>
              <i className="bi bi-heart-fill" />
            </button>
          </div>
          <div className="mt-2">{errMessage}</div>
        </div>
      )}
    </div>
  );
}
