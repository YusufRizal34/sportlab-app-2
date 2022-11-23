import React, { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Header from "../templates/Header";
import Footer from "../templates/Footer";

import { fetchData } from "../services/action/page";
import { signUp } from "../services/action/auth";
import RegisterForm from "../components/RegisterForm";

export default function LoginPage() {
  const [page, setPage] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [errMessage, setErrMessage] = useState("");

  const setRegisterAccount = async (userData) => {
    const { payload } = await dispatch(signUp(userData));
    setPage(payload);
    if (!payload.message) return navigate("/login");
    setErrMessage(payload.message);
  };

  const loadPageData = useCallback(async () => {
    await dispatch(fetchData("login"));
    if (page?.user) {
      return navigate("/");
    }
  }, [dispatch]);

  useEffect(() => {
    loadPageData();
  }, [loadPageData]);

  return (
    <>
      <Header />
      <RegisterForm
        setRegisterAccount={setRegisterAccount}
        errMessage={errMessage}
      />
      <Footer />
    </>
  );
}
