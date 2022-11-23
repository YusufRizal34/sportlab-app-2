import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchData } from "../services/action/page";

import Header from "../templates/Header";
import Footer from "../templates/Footer";
// import ProductArrive from "../components/Cart/ProductArrive";
import CartContainer from "../components/Cart/CartContainer";
import CartFilter from "../components/Cart/CartFilter";
import ProductPayment from "../components/Cart/ProductPayment";

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

  useEffect(() => {
    loadPageData();
  }, [loadPageData]);

  return (
    <>
      <Header data={page} />
      <CartFilter />
      <ProductPayment />
      <CartContainer data={page?.products} loading={loading} />
      <Footer data={page?.user} />
    </>
  );
}
