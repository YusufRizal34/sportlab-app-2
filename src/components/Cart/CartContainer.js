import React, { useState } from "react";

import { MoneyFormater } from "../../utils/MoneyFormater";
import { CreditCardFormatter } from "../../utils/CreditCardFormatter";
import Spinner from "../Spinner";

export default function CartContainer({
  data = [],
  loading,
  deleteItem,
  buyItem,
}) {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const products = data?.products || [];
  const bank = data?.bank || null;
  const subTotal = products.reduce(function (prev, current) {
    return prev + +current?.total;
  }, 0);
  const shipping = 20000;
  const total = subTotal + shipping;

  const handlePaymentMethod = (e) => {
    setPaymentMethod(e.target.value);
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    const productData = {
      products: products,
      totalPayment: total,
      paymentMethod: paymentMethod,
    };
    buyItem(productData);
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div
            className={`col-lg-${
              products.length < 1 ? "12" : "8"
            } col-12 cart-container`}
          >
            <h4>Keranjang</h4>

            {loading && <Spinner />}
            {!loading && products.length < 1 && (
              <h5 className="text-center p-3">Keranjangmu kosong</h5>
            )}
            {!loading &&
              products.map((product, index) => {
                return (
                  <div className="row text-center" key={index}>
                    <div className="col-8">
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
                      <p>{MoneyFormater(product?.total, "Rp. ")}</p>
                    </div>
                    <div className="col-2 align-self-center">
                      <button onClick={() => deleteItem(product?.id)}>X</button>
                    </div>
                  </div>
                );
              })}
          </div>
          {!loading && products.length > 0 && (
            <div className="col-lg-4 col-12 payment-container">
              <div className="payment-margin">
                <h4>Info Pembayaran</h4>
              </div>
              <div className="payment-margin">
                <label>Total Pembayaran</label>
                <div className="row">
                  <div className="col-6">Subtotal</div>
                  <div className="col-6">{MoneyFormater(subTotal, "Rp. ")}</div>
                </div>
                <div className="row">
                  <div className="col-6">Biaya Pengiriman</div>
                  <div className="col-6">Rp. 20.000</div>
                </div>
                <div className="row divider">
                  <div className="col-6">Total</div>
                  <div className="col-6">{MoneyFormater(total, "Rp. ")}</div>
                </div>
              </div>

              <div className="payment-margin credit-card">
                <label>Credit Account</label>

                {bank.accountNumber ? (
                  <div className="row align-self-center">
                    <p className="col-6">Nomor Rekening</p>
                    <p className="col-6">
                      {CreditCardFormatter(bank.accountNumber)}
                    </p>
                  </div>
                ) : (
                  <p className="text-danger">
                    Belum terhubung dengan akun bank
                  </p>
                )}
              </div>
              <button onClick={handleSumbit} className="btn payment-button">
                Check Out
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
