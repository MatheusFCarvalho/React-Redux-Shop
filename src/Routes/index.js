import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Cart } from "../pages/Cart";
import { Products } from "../pages/products";
import { CartProvider } from "../Providers/Cart";
import { ProviderProducts } from "../Providers/Product";

export function MinhasRotas() {
  return (
        <BrowserRouter>
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<Products />} />
          </Routes>
        </BrowserRouter>
  );
}
