import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import { useSelector } from "react-redux";

const MyLayout = () => {
  const { isUserReady } = useSelector((state) => state.ready);

  console.log(isUserReady);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MyLayout;
