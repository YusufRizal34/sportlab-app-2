import React, { useCallback, useEffect, useState } from "react";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import Hero from "../components/Hero";

import Newsletter from "../components/Newsletter";
import ShopContainer from "../components/Shop/ShopContainer";
import { fetchData } from "../services/action/page";
import Footer from "../templates/Footer";
import Header from "../templates/Header";

export default function ShopPage() {
  const [page, setPage] = useState(null);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const loadPageData = useCallback(async () => {
    const { payload } = await dispatch(fetchData("shop-page"));
    setPage(payload);
    setLoading(false);
  }, [dispatch]);

  const filteredProducts = useMemo(() => {
    return page?.products?.filter((product) => {
      return product?.name.toLowerCase().includes(query.toLowerCase());
    });
  }, [query, page]);

  useEffect(() => {
    loadPageData();
  }, []);

  return (
    <>
      <Header data={page} />
      <Hero />
      <ShopContainer
        data={filteredProducts}
        loading={loading}
        setQuery={setQuery}
      />
      <Newsletter />
      <Footer data={page?.user} />
    </>
  );
}
