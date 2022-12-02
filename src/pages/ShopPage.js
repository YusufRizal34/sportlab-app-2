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

  const checkBoxFilteredProducts = (products, filters, attribute) => {
    const filtered = products.filter((product) =>
      filters.includes(product[attribute])
    );
    return filtered;
  };

  const processingFilter = useMemo(() => {
    let newData = page?.products || [];

    //SEARCHING
    if (query.length > 0) newData = searchFilteredProducts(newData);

    if (filter.length > 0) {
      //CATEGORY FILTER
      const categoryFilter = filter
        .filter((item) => item.name === "category")
        .map((item) => item.value);
      if (categoryFilter.length > 0)
        newData = checkBoxFilteredProducts(
          newData,
          categoryFilter,
          "categoryId"
        );

      //BRAND FILTER
      const brandFilter = filter
        .filter((item) => item.name === "brand")
        .map((item) => item.value);
      if (brandFilter.length > 0)
        newData = checkBoxFilteredProducts(newData, brandFilter, "brand");
    }

    return newData;
  }, [query, filter, page, searchFilteredProducts, checkBoxFilteredProducts]);

  useEffect(() => {
    loadPageData();
  }, [loadPageData]);

  const filterData = {
    category: [
      {
        value: 1,
        title: "Sepatu",
        name: "category",
      },
      {
        value: 3,
        title: "Tas",
        name: "category",
      },
      {
        value: 4,
        title: "Baju",
        name: "category",
      },
      {
        value: 5,
        title: "Jersey",
        name: "category",
      },
    ],
    brand: [
      {
        value: "adidas",
        title: "Adidas",
        name: "brand",
      },
      {
        value: "puma",
        title: "Puma",
        name: "brand",
      },
    ],
  };

  return (
    <>
      <Header data={page} />
      <Hero />
      <ShopContainer
        data={processingFilter}
        loading={loading}
        filterData={filterData !== null ? filterData : ""}
        setQuery={setQuery}
        setFilter={setFilter}
      />
      <Newsletter />
      <Footer data={page?.user} />
    </>
  );
}
