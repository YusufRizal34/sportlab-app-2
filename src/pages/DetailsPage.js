import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import Newsletter from "../components/Newsletter";
import PageDetailDescription from "../components/PageDetail/PageDetailDescription";
import PageDetailImage from "../components/PageDetail/PageDetailImage";

import { fetchData } from "../services/action/page";
import { addToCart } from "../services/action/product";
import Footer from "../templates/Footer";
import Header from "../templates/Header";

export default function DetailsPage() {
  const [page, setPage] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState("");

  const loadPageData = useCallback(async () => {
    const { payload } = await dispatch(fetchData(`detail-page/${id}`));
    setPage(payload);
    setLoading(false);
  }, [id, dispatch]);

  const takeToCart = async (productData) => {
    if (!page?.user) navigate(`/login`);
    const { payload } = await dispatch(
      addToCart({ page: `detail-page/${id}`, productData })
    );
    if (payload.message) setErrMessage(payload.message);
    loadPageData();
  };

  useEffect(() => {
    if (page == null) loadPageData();
  }, [loadPageData]);

  return (
    <>
      <Header data={page} />
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-sm-12 p-lg-3">
              <PageDetailImage data={page?.product} loading={loading} />
            </div>
            <div className="col-lg-5 col-sm-12 p-lg-3">
              <PageDetailDescription
                takeToCart={takeToCart}
                data={page?.product}
                loading={loading}
                errMessage={errMessage}
              />
            </div>
          </div>
        </div>
      </section>
      <Newsletter />
      <Footer data={page?.user} />
    </>
  );
}
