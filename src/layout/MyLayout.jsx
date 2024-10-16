import React from "react";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import GetStart from "../pages/GetStart";
import { useSelector } from "react-redux";

const MyLayout = () => {
  const {isUserReady} = useSelector((state) => state.ready)

  console.log(isUserReady)

  return (
    <>
      {isUserReady ? (
        <GetStart />
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
    </>
  );
};

export default MyLayout;
