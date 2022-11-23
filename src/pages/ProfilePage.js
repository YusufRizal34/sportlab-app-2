import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../services/action/page";

import Profile from "../components/Profile";
import Header from "../templates/Header";
import Footer from "../templates/Footer";

export default function ProfilePage() {
  const [page, setPage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loadPageData = useCallback(async () => {
    const { payload } = await dispatch(fetchData("profile-page"));
    setPage(payload);
    if (!payload?.user) {
      return navigate("/login");
    }
  }, [dispatch]);

  useEffect(() => {
    loadPageData();
  }, []);

  return (
    <>
      <Header data={page} />
      <Profile data={page?.user} />
      <Footer data={page?.user} />
    </>
  );
}
