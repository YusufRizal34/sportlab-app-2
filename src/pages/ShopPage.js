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
  const [filter, setFilter] = useState([]);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const loadPageData = useCallback(async () => {
    const { payload } = await dispatch(fetchData("shop-page"));
    setPage(payload);
    setLoading(false);
  }, [dispatch]);

  const searchFilteredProducts = (products) => {
    return products.filter((product) => {
      if (product?.name.toLowerCase().includes(query.toLowerCase())) {
        return product;
      }
    });
  };

  const checkBoxFilteredProducts = (products) => {
    return products.filter(
      (product) => product.categoryId.indexOf(filter) != -1
    );
  };

  const processingFilter = useMemo(() => {
    let newData = page?.products || [];
    newData = searchFilteredProducts(newData);
    newData = checkBoxFilteredProducts(newData);
    return newData;
  }, [query, filter, page]);

  useEffect(() => {
    loadPageData();
  }, []);

  return (
    <>
      <Header data={page} />
      <Hero />
      <ShopContainer
        data={processingFilter}
        loading={loading}
        filterData={page?.category !== null ? page?.category : ""}
        setQuery={setQuery}
        setFilter={setFilter}
      />
      <Newsletter />
      <Footer data={page?.user} />
    </>
  );
}
