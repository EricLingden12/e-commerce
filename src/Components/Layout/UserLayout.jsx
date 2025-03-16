import React, { useState } from "react";
import NavBar from "../Common/NavBar";
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
