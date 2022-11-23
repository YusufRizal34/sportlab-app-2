import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "../templates/Header";
import Footer from "../templates/Footer";
import LoginForm from "../components/Login/LoginForm";

import { fetchData } from "../services/action/page";
import { signIn } from "../services/action/auth";

export default function LoginPage() {
  const page = useSelector((state) => state.page.data);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState("");

  const setAccessToken = async (userData) => {
    const { payload } = await dispatch(signIn(userData));
    if (!payload.message) return navigate("/");
    setErrMessage(payload.message);
  };

  const loadPageData = useCallback(async () => {
    await dispatch(fetchData("login"));
  }, [dispatch]);

  useEffect(() => {
    loadPageData();
  }, [loadPageData]);

  if (page?.user) {
    navigate("/");
  } else {
    return (
      <>
        <Header />
        <LoginForm setAccessToken={setAccessToken} errMessage={errMessage} />
        <Footer />
      </>
    );
  }
}
