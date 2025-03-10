import React, { useState } from "react";
import NavBar from "../Common/NavBar";
import MainContent from "../Common/MainContent";
import Footer from "../Common/Footer";
import { Outlet } from "react-router-dom";
const UserLayout = () => {
  const [addToCart, setAddToCart] = useState([]);
  return (
    <div>
      <NavBar />
      <div>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default UserLayout;
