import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../services/action/page";

import OrderContainer from "../components/Order/OrderContainer";
import OrderFilter from "../components/Order/OrderFilter";
import Header from "../templates/Header";
import Footer from "../templates/Footer";

export default function OrderPage() {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const loadPageData = useCallback(async () => {
    const { payload } = await dispatch(fetchData("order-page"));
    setPage(payload);
    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    loadPageData();
  }, [loadPageData]);

  return (
    <>
      <Header data={page} />
      <OrderFilter />
      <OrderContainer data={page?.order} />
      <Footer data={page?.user} />
    </>
  );
}
