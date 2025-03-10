import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "sonner";
import { Auth0Provider } from "@auth0/auth0-react";
import { CartProvider } from "./Components/Cart/CartProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Auth0Provider
      domain="dev-j38bx5mr60akdaxo.us.auth0.com"
      clientId="IU7rldbnJDL1IfayJBqZR8t2W0iOA8Kx"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        <CartProvider>
          <Toaster position="top-right" />
          <App />
        </CartProvider>
      </BrowserRouter>
    </Auth0Provider>
  </StrictMode>
);
