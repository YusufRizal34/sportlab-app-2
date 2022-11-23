import React from "react";
import Spinner from "../Spinner";
import { MoneyFormater } from "../../utils/MoneyFormater";

export default function OrderContainer({ data = [], loading }) {
  return (
    <section>
      <div className="container">
        <div className="row">
          {loading && <Spinner />}
          {!loading && data.length < 1 && (
            <h5 className="text-center p-3">Tidak ada order</h5>
          )}
          {!loading &&
            data.map((order, index) => {
              return (
                <div className="col-lg-6 col-sm-12 mb-2" key={index}>
                  <div className="card">
                    <div className="card-header">
                      <div className="row">
                        <div className="col">Arrive</div>
                        <div className="col text-end fw-bold">
                          {order.paymentStatus}{" "}
                          <i className="bi bi-check-lg"></i>
                        </div>
                      </div>
                    </div>
                    <div className="card-body">
                      <div className="row">
                        <div className="col-2">
                          <figure>
                            {order?.order?.imageUrl && (
                              <img
                                src={`/${order?.order?.imageUrl}`}
                                alt=""
                                className="img-contain"
                              />
                            )}
                          </figure>
                        </div>
                        <div className="col-auto">
                          <p>Nama Barang : {order?.order?.name}</p>
                          <p>Jumlah Barang : {order?.qty} pcs</p>
                          <p>
                            Total Biaya : {MoneyFormater(order.total, "Rp. ")}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
