// App.jsx
import React from "react";
import { CartProvider } from "./CartContext";
import App from "./App";

const Root = () => (
  <CartProvider>
    <App />
  </CartProvider>
);

export default Root;
