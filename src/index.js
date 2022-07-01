import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { MinhasRotas } from "./Routes";
import { ProviderProducts } from "./Providers/Product";
import { CartProvider } from "./Providers/Cart";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ProviderProducts>
      <CartProvider>
        <MinhasRotas />
      </CartProvider>
    </ProviderProducts>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
