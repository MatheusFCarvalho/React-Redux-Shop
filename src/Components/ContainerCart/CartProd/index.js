import { useContext } from "react";
import { CartContext } from "../../../Providers/Cart";
import { StyledCard } from "../style";
import QtdControl from "./QtdController";

export function CartProd({ product, index }) {
  const { remCart } = useContext(CartContext);

  function handleRemove() {
    remCart(product);
  }

  return (
    <StyledCard>
      <h2>{product.name}</h2>
      <img src={product.img} alt={product.name} />
      <QtdControl product={product} index={index} qtd={product.qtd} />
      <p>Preço: R${product.price},00</p>
      <button onClick={handleRemove}>Remover do carrinho</button>
    </StyledCard>
  );
}
