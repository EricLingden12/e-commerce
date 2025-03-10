import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Offer from "./Pages/Offer";
import Profile from "./Pages/Profile";
import CollectionPage from "./Pages/CollectionPage";
import ProductDetail from "./Components/Products/ProductDetail";
import Checkout from "./Components/Cart/Checkout";
import PaymentMethod from "./Components/Cart/PaymentMethod";
import PaymentSuccess from "./Components/Cart/PaymentSuccess";
import { CartProvider } from "./Components/Cart/CartProvider";
import AdminPage from "./Pages/AdminPage";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import UserLayout from "./Components/Layout/UserLayout";

// Corrected import path

// App.jsx
const App = () => {
  return (
    <CartProvider>
      <Routes>
        {/* All user routes nested under UserLayout */}
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="men" element={<Men />} />
          <Route path="women" element={<Women />} />
          <Route path="offer" element={<Offer />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="collections:collection" element={<CollectionPage />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="paymentmethod" element={<PaymentMethod />} />
          <Route path="paymentsuccess" element={<PaymentSuccess />} />
        </Route>

        {/* Admin route */}
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </CartProvider>
  );
};

export default App;
