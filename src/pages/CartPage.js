import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchData } from "../services/action/page";
import { buyProduct, deleteProduct } from "../services/action/product";

import Header from "../templates/Header";
import Footer from "../templates/Footer";
import CartContainer from "../components/Cart/CartContainer";

export default function CartPage() {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
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
    await dispatch(buyProduct({ page: `order-page`, productData: data }));
    loadPageData();
  };

  const deleteItem = async (id) => {
    await dispatch(deleteProduct(`cart-page/${id}`));
    loadPageData();
  };

  useEffect(() => {
    loadPageData();
  }, [loadPageData]);

  return (
    <>
      <Header data={page} />
      <CartContainer
        data={page}
        loading={loading}
        deleteItem={deleteItem}
        buyItem={buyItem}
      />
      <Footer data={page?.user} />
    </>
  );
}
