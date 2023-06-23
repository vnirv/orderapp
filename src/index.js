import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import CartProvider from "./store/cart-provider";

const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
  font-family: Raleway;
  text-align: center;
}`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Global />
    <CartProvider>
      <App />
    </CartProvider>
  </React.StrictMode>
);
