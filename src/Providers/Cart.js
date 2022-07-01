import { createContext, useState } from "react";

export const CartContext = createContext();

const defaultState = JSON.parse(localStorage.getItem("@kenzieShopCart")) || [];

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(defaultState);
  function addCart(item) {
    if (cart.includes(item)) {
      item.qtd++;
      setCart([...cart]);
    } else {
      setCart([...cart, item]);
    }
    localStorage.setItem("@kenzieShopCart", JSON.stringify(cart));
  }
  function remCart(item) {
    const newCart = cart.filter((prod) => prod.id !== item.id);
    setCart(newCart);
    localStorage.setItem("@kenzieShopCart", JSON.stringify(cart));
  }
  function remOneCart(item) {
    item.qtd--;
    setCart([...cart]);
    if (item.qtd === 0) {
      remCart(item);
    }
    localStorage.setItem("@kenzieShopCart", JSON.stringify(cart));
  }

  return (
    <CartContext.Provider value={{ cart, addCart, remCart, remOneCart }}>
      {children}
    </CartContext.Provider>
  );
};
