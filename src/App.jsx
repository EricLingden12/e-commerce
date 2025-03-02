import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/Common/NavBar";
import Home from "./Pages/Home";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Offer from "./Pages/Offer";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Profile from "./Pages/Profile";
import CollectionPage from "./Pages/CollectionPage";
import ProductDetail from "./Components/Products/ProductDetail";
import Checkout from "./Components/Cart/Checkout";
import PaymentMethod from "./Components/Cart/PaymentMethod";
import PaymentSuccess from "./Components/Cart/PaymentSuccess";
import Footer from "./Components/Common/Footer";
import { CartProvider } from "./Components/Cart/CartProvider";
// Corrected import path

const App = () => {
  const [addtoCart, setAddToCart] = useState(0);

  return (
    <CartProvider>
      <NavBar addtoCart={addtoCart} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route path="/offer" element={<Offer />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/collections:collection" element={<CollectionPage />} />
        <Route
          path="/product/:id"
          element={
            <ProductDetail addtoCart={addtoCart} setaddtoCart={setAddToCart} />
          }
        />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/paymentmethood" element={<PaymentMethod />} />
        <Route path="/paymentsuccess" element={<PaymentSuccess />} />
        <Route path="/" />
      </Routes>
      <Footer />
    </CartProvider>
  );
};

export default App;
