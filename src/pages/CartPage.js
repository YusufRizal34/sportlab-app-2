import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchData } from "../services/action/page";
import { buyProduct, deleteProduct } from "../services/action/product";

import Header from "../templates/Header";
import Footer from "../templates/Footer";
import CartContainer from "../components/Cart/CartContainer";
import Modal from "../components/Modal";

export default function CartPage() {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errMessage, setErrMessage] = useState("");
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadPageData = useCallback(async () => {
    const { payload } = await dispatch(fetchData("cart-page"));
    setPage(payload);
    setLoading(false);
    if (!payload.user || payload.message) {
      return navigate("/login");
    }
  }, [dispatch, navigate]);

  const buyItem = async (data) => {
    const { payload } = await dispatch(
      buyProduct({ page: `order-page`, productData: data })
    );
    if (payload.message) setErrMessage(payload.message);
    loadPageData();
  };

  const deleteItem = async (id) => {
    await dispatch(deleteProduct(`cart-page/${id}`));
    loadPageData();
  };

  const handleSubmit = (pin) => {
    const receiptData = {
      products: page?.products,
      totalPayment: page?.total,
      pinNumber: parseInt(pin),
    };
    buyItem(receiptData).then(() => setOpen(false));
  };

  useEffect(() => {
    loadPageData();
  }, [loadPageData]);

  return (
    <>
      <Modal
        open={open}
        setClose={() => setOpen(false)}
        onSubmit={handleSubmit}
      />
      <Header data={page} />
      <CartContainer
        data={page}
        loading={loading}
        deleteItem={deleteItem}
        buyItem={buyItem}
        setOpen={() => setOpen(true)}
        errMessage={errMessage}
      />
      <Footer data={page?.user} />
    </>
  );
}
