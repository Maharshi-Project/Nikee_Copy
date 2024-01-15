import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { AppProvider } from "./context/productcontext";
import { CartProvider } from "./context/cart_context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
      <AppProvider>
        <CartProvider>
        <App/>
        </CartProvider>
    </AppProvider>
);
