import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { fetchData } from "../services/action/page";

import Banner from "../components/Banner";
import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import ProductArrival from "../components/ProductArrival";
import Header from "../templates/Header";
import Footer from "../templates/Footer";

import BestSeller from "../components/BestSeller";

export default function LandingPage() {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  const loadPageData = useCallback(async () => {
    const { payload } = await dispatch(fetchData("landing-page"));
    setPage(payload);
    setLoading(false);
  }, [dispatch]);

  useEffect(() => {
    loadPageData();
  }, [loadPageData]);

  return (
    <>
      <Header data={page} />
      <Hero />
      <BestSeller data={page?.products} loading={loading} />
      <Banner />
      <ProductArrival data={page?.newArrival} loading={loading} />
      <Newsletter />
      <Footer data={page?.user} />
    </>
  );
}
