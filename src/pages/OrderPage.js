import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../services/action/page";

import OrderContainer from "../components/Order/OrderContainer";
import OrderFilter from "../components/Order/OrderFilter";
import Header from "../templates/Header";
import Footer from "../templates/Footer";

export default function OrderPage() {
  const [page, setPage] = useState(null);
  const [filter, setFilter] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const loadPageData = useCallback(async () => {
    const { payload } = await dispatch(fetchData("order-page"));
    setPage(payload);
    setLoading(false);
  }, [dispatch]);

  const filterData = [
    { value: "", title: "Semua tanggal transaksi" },
    { value: "30", title: "30 Hari Terakhir" },
    { value: "90", title: "90 Hari Terakhir" },
  ];

  const changeDateToNumber = (date) => {
    const newDate = new Date(date);
    return newDate;
  };

  const processingFilter = useMemo(() => {
    let newData = page?.order || [];

    if (filter !== null) {
      const currentDate = new Date();
      currentDate.setDate(currentDate.getDate() - filter);
      newData = newData.filter(
        (product) => changeDateToNumber(product.updatedAt) > currentDate
      );
    }

    return newData;
  }, [page, filter]);

  useEffect(() => {
    loadPageData();
  }, [loadPageData]);

  return (
    <>
      <Header data={page} />
      <OrderFilter filterData={filterData} setFilter={setFilter} />
      <OrderContainer data={processingFilter} loading={loading} />
      <Footer data={page?.user} />
    </>
  );
}
