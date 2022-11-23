import React, { useState } from "react";
import Spinner from "../Spinner";
import { MoneyFormater } from "../../utils/MoneyFormater";
import InputNumber from "../InputNumber";

export default function CartContainer({ data = [], loading }) {
  const [qty, setQty] = useState(1);

  const test = (e) => {
    console.log(e);
  };
  return (
    <section>
      <div className="container">
        <div className="row text-center receipt-container">
          {loading && <Spinner />}
          {!loading && data.length < 1 && (
            <h5 className="text-center p-3">Tidak ada order</h5>
          )}
          {!loading &&
            data.map((product, index) => {
              return (
                <div className="row" key={index}>
                  <div className="col-6">
                    <div className="row">
                      <div className="col-4 align-self-center" key={index}>
                        <figure className="img-container">
                          {product?.product?.imageUrl && (
                            <img
                              src={`/${product?.product?.imageUrl}`}
                              alt=""
                              className="img-scale"
                            />
                          )}
                        </figure>
                      </div>
                      <div className="col-8 align-self-center">
                        <p>Nama Barang : {product?.product?.name}</p>
                        <p>Jumlah Barang : {product?.qty} pcs</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-2 align-self-center">
                    <InputNumber
                      min={1}
                      value={product?.qty}
                      name="qty"
                      onChange={test}
                    />
                  </div>
                  <div className="col-4 align-self-center">
                    <p>{MoneyFormater(product.total, "Rp. ")}</p>
                  </div>
                </div>
              );
            })}
          <div className="col-lg-8"></div>
          <div className="col-lg-4 col-sm-12">
            <div className="row divider">
              <div className="row">
                <label className="col-8 align-self-center">Subtotal</label>
                <label className="col-4 align-self-center">Rp.600.000</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
